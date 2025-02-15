import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../player.service';
import { Player } from '../../model/player';
import * as fabric from 'fabric';
import { HeaderService, NavButton } from '../header.service';
import { Prediction } from '../../model/prediction-result';
import { cards } from '../../model/cards';
import { CardColor } from '../../model/card-color';


@Component({
  selector: 'app-annotation-editor',
  templateUrl: './annotation-editor.component.html',
  styleUrls: ['./annotation-editor.component.css'],
  imports: [CommonModule]
})
export class AnnotationEditorComponent implements OnInit
{
  player: Player | undefined;
  canvas: fabric.Canvas | undefined;

  currentPredictions: Prediction[] = [];

  currentWidth: number = 0
  currentHeight: number = 0

  dragActive = false
  lastPosX = 0
  lastPosY = 0
  startZoom = 1
  initialDistance = 0
  pinchCenter: fabric.XY = { x: 0, y: 0 }
  activeTouchId: number | null = null; // Store the finger ID

  @Input() set playerNumber(playerNumber: number)
  {
    this.player = this.playerService.getPlayer(playerNumber);
  }

  constructor(private playerService: PlayerService, private headerService: HeaderService, private location: Location) { }

  async ngOnInit()
  {
    console.log(this.player?.annotations);
    this.headerService.setButtons([
      {
        label: 'Cancel',
        class: 'btn-secondary',
        action: this.cancelEdit.bind(this),
        visible: true
      },
      {
        label: 'Save',
        class: 'btn-primary',
        action: this.saveEdit.bind(this),
        visible: true
      }
    ]);

    await this.initCanvas();
    this.updateCanvas();
  }

  @HostListener('window:resize')
  onResize()
  {
    this.updateCanvas()
  }

  getCanvasSize(): { width: number, height: number }
  {
    let width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    let height = Math.min(document.documentElement.clientHeight, window.innerHeight || 0);

    const navBarHeight = document.getElementById("navBar")?.offsetHeight || 0;
    console.log("PageSize", width, height, navBarHeight);

    height -= navBarHeight;

    return { width, height }
  }

  async loadImage(src: string): Promise<HTMLImageElement>
  {
    return new Promise((resolve, reject) =>
    {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }

  getCardColor(cardLabel: string): string
  {
    const color = cards[cardLabel].color
    switch (color)
    {
      case CardColor.LINDEN:
        return `rgba(255,233,0, 1)`
      case CardColor.OAK:
        return `rgba(100,40,0, 1)`
      case CardColor.SILVER_FIR:
        return `rgba(0,29,255, 1)`
      case CardColor.BIRCH:
        return `rgba(47,247,11, 1)`
      case CardColor.BEECH:
        return `rgba(0,76,0, 1)`
      case CardColor.SYCAMORE:
        return `rgba(255,0,0, 1)`
      case CardColor.DOUGLAS_FIR:
        return `rgba(194,194,172, 1)`
      case CardColor.HORSE_CHESTNUT:
        return `rgba(255,142,0, 1)`
      case CardColor.LARIX:
        return `rgba(94,3,140, 1)`
      case CardColor.PINUS:
        return `rgba(255,0,233, 1)`
      default: // Tree sprout, Unknown
        return `rgba(255, 255, 255, 1)`
    }
  }

  getCardColorAlpha(cardLabel: string, opacity: number = 0.3): string
  {
    const rgba = this.getCardColor(cardLabel)
    return rgba.replace(", 1)", `, ${opacity})`)
  }

  async initCanvas()
  {
    if (!this.player?.boardGame || !this.player?.annotations?.predictions)
    {
      console.error("Init: Missing image or annotations:", this.player?.boardGame, this.player?.annotations?.predictions)
      throw new Error("Init: Missing image or annotations:");
    }

    const img = await this.loadImage(this.player.boardGame)

    const canvas = new fabric.Canvas('annotationCanvas',
      {
        selection: false, // disable group selection for simplicity
        // allowTouchScrolling: true,
        // enablePointerEvents: true,
      }
    );

    const fabricImg = new fabric.FabricImage(img, {
      originX: "left",
      originY: "top",
    })

    canvas.backgroundImage = fabricImg;

    this.currentPredictions = this.player?.annotations?.predictions

    this.canvas = canvas

    canvas.on("mouse:down", this.mouseDown.bind(this))
    canvas.on("mouse:move", this.mouseMove.bind(this))
    canvas.on("mouse:up", this.mouseUp.bind(this))

    canvas.on('mouse:wheel', this.zoomCanvasMouseWheel.bind(this))

    this.registerTouchEventHandler()

    for (const prediction of this.currentPredictions)
    {
      let rect = new fabric.Rect({
        left: (prediction.x - prediction.width / 2),
        top: (prediction.y - prediction.height / 2),
        width: prediction.width,
        height: prediction.height,
        fill: this.getCardColorAlpha(prediction.class, 0.3),
        stroke: this.getCardColor(prediction.class),
        strokeWidth: 2,
        cornerStyle: 'circle',
      });
      // rect.controls = {
      //   ...fabric.Rect.prototype.controls,
      //   mtr: new fabric.Control({ visible: false })
      // }

      this.canvas.add(rect);
    }

  }

  updateCanvas()
  {
    if (!this.player?.boardGame || !this.player?.annotations?.predictions || !this.canvas || !this.canvas.backgroundImage)
    {
      console.error("Update: Missing image or annotations:", this.player?.boardGame, this.player?.annotations?.predictions, this.canvas, this.canvas?.backgroundImage)
      throw new Error("Update: Missing image or annotations:");
    }

    const canvasElement = this.canvas?.getElement() as HTMLCanvasElement;
    if (!canvasElement)
    {
      console.error("Canvas element not found");
      return;
    }

    const { width, height } = this.getCanvasSize()

    this.canvas.setDimensions({ width: width, height: height });

    const img = this.player.annotations.image
    const scaleX = width / img.width
    const scaleY = height / img.height
    const scale = Math.min(scaleX, scaleY)
    this.canvas.setZoom(scale)
    this.canvas.absolutePan(new fabric.Point(0, 0))
  }

  saveEdit(button: NavButton)
  {
    alert("Not implemented!")
  }

  cancelEdit(button: NavButton)
  {
    this.location.back();
  }

  /**
    * Get relevant style values for the given element
    * @see https://stackoverflow.com/a/64654744/13221239
    */
  getTransformVals(element: Element)
  {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return {
      scaleX: matrix.m11,
      scaleY: matrix.m22,
      translateX: matrix.m41,
      translateY: matrix.m42,
      width: element.getBoundingClientRect().width,
      height: element.getBoundingClientRect().height,
    }
  }

  /**
    * Putting touch point coordinates into an object
    */
  getPinchCoordinates(touch1: { clientX: any; clientY: any; }, touch2: { clientX: any; clientY: any; })
  {
    return {
      x1: touch1.clientX,
      y1: touch1.clientY,
      x2: touch2.clientX,
      y2: touch2.clientY,
    }
  }

  /**
    * Returns the distance between two touch points
    */
  getPinchDistance(touch1: { clientX: any; clientY: any; }, touch2: { clientX: any; clientY: any; })
  {
    const coord = this.getPinchCoordinates(touch1, touch2)
    return Math.sqrt(Math.pow(coord.x2 - coord.x1, 2) + Math.pow(coord.y2 - coord.y1, 2))
  }

  /**
    * Pinch center around wich the canvas will be scaled/zoomed
    * takes into account the translation of the container element
    */
  setPinchCenter(touch1: { clientX: any; clientY: any; }, touch2: { clientX: any; clientY: any; })
  {
    const coord = this.getPinchCoordinates(touch1, touch2)

    const currentX = (coord.x1 + coord.x2) / 2
    const currentY = (coord.y1 + coord.y2) / 2

    if (this.canvas)
    {
      const transform = this.getTransformVals(this.canvas.wrapperEl)

      this.pinchCenter = {
        x: currentX - transform.translateX,
        y: currentY - transform.translateY,
      }
    }
  }

  /**
   * Register touch events since FabricJS does not (yet) offer touch events
   * (only with a wildly outdated custom build)
   */
  registerTouchEventHandler()
  {
    if (!this.canvas) return;

    this.canvas.upperCanvasEl.addEventListener('touchstart', (event: any) =>
    {
      console.log("touchstart", event)
      event.preventDefault(); // Prevent browser zooming
      this.pinchCanvasStart(event)

      this.dragCanvasStart(event)
    })

    this.canvas.upperCanvasEl.addEventListener('touchmove', (event: any) =>
    {
      event.preventDefault(); // Prevent browser zooming
      this.pinchCanvas(event)

      this.dragCanvas(event)

    })

  }

  /**
   * Save reference point from which the interaction started
   */
  dragCanvasStart(event: any)
  {
    const evt = event.e || event // retrieving original event from fabricJS event

    if (this.canvas?._activeObject) return // box selected

    if (this.activeTouchId === null && event.targetTouches.length > 0)
    {
      this.activeTouchId = event.targetTouches[0].identifier; // Store the first finger ID
    }

    const touch: any = Array.from(event.targetTouches).find((t: any) => t.identifier === this.activeTouchId);
    if (touch)
    {
      this.lastPosX = touch.clientX
      this.lastPosY = touch.clientY
      this.dragActive = true
    }
  }

  /**
   * Start Dragging the Canvas using Fabric JS Events
   */
  dragCanvas(event: any)
  {
    if (!this.canvas) return;

    const evt = event.e || event // retrieving original event from fabricJS event

    if (!this.dragActive) return;

    let touch = Array.from(evt.targetTouches).find((t: any) => t.identifier === this.activeTouchId);
    if (!touch)
    {
      this.dragCanvasStart(event);
    }
    touch = Array.from(event.targetTouches).find((t: any) => t.identifier === this.activeTouchId);
    if (touch)
    {
      this.redrawCanvas(touch)
    }

  }


  /**
   * Save reference point from which the interaction started
   */
  mouseDown(event: any)
  {
    const evt = event.e || event // retrieving original event from fabricJS event

    if (!event.target && !this.dragActive) // no box selected
    {
      this.lastPosX = evt.clientX
      this.lastPosY = evt.clientY
      this.dragActive = true
    }
  }

  /**
   * Start Dragging the Canvas using Fabric JS Events
   */
  mouseMove(event: any)
  {
    const evt = event.e || event // retrieving original event from fabricJS event

    if (!this.dragActive) return;

    if (1 !== evt.buttons) // && !(evt instanceof Touch))
    {
      return
    }

    this.redrawCanvas(evt)
  }

  mouseUp(event: any)
  {
    this.dragActive = false;
  }

  /**
   * Update the canvas content by updating the viewport transform which triggers a re-draw of the canvas
   * this is very expensive and slow when done to a lot of elements
   */
  redrawCanvas(event: any)
  {
    if (this.canvas)
    {
      const vpt = this.canvas.viewportTransform

      let offsetX = vpt[4] + event.clientX - (this.lastPosX || 0)
      let offsetY = vpt[5] + event.clientY - (this.lastPosY || 0)

      vpt[4] = offsetX
      vpt[5] = offsetY

      this.lastPosX = event.clientX
      this.lastPosY = event.clientY

      this.canvas.setViewportTransform(vpt)
    }
  }

  /**
   * Save the distance between the touch points when starting the pinch
   */
  pinchCanvasStart(event: any)
  {
    if (this.canvas)
    {
      if (event.touches.length !== 2)
      {
        return
      }

      this.canvas?.discardActiveObject(event)

      this.startZoom = this.canvas?.getZoom()
      this.initialDistance = this.getPinchDistance(event.touches[0], event.touches[1])
    }
  }

  /**
   * Start pinch-zooming the canvas
   */
  pinchCanvas(event: any)
  {
    // alert("pinchCanvas: " + event.target)
    if (event.touches.length !== 2) //|| this.canvas?._activeObject)
    {
      return
    }
    this.canvas?.discardActiveObject(event)

    this.setPinchCenter(event.touches[0], event.touches[1])

    const currentDistance = this.getPinchDistance(event.touches[0], event.touches[1])
    let scale = currentDistance / this.initialDistance

    this.zoomCanvas(scale * this.startZoom, this.pinchCenter)
  }

  /**
   * Zoom canvas when user used mouse wheel
   */
  zoomCanvasMouseWheel(event: any)
  {
    if (!this.canvas) return

    var delta = event.e.deltaY;
    var zoom = this.canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.1) zoom = 0.1;
    this.canvas.zoomToPoint(new fabric.Point(event.e.offsetX, event.e.offsetY), zoom);
    event.e.preventDefault();
    event.e.stopPropagation();
  }

  /**
   * Zoom the canvas content using fabric JS
   */
  zoomCanvas(zoom: any, aroundPoint: any)
  {
    if (!this.canvas) return

    if (zoom > 20) zoom = 20;
    if (zoom < 0.1) zoom = 0.1;

    this.canvas.zoomToPoint(aroundPoint, zoom)
    this.canvas.renderAll()

  }

}
