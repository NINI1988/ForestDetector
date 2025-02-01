import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../player.service';
import { Player } from '../../model/player';
import * as fabric from 'fabric';
import { HeaderService, NavButton } from '../header.service';
import { Router } from '@angular/router';
import { Prediction } from '../../model/prediction-result';

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

  @Input() set playerNumber(playerNumber: number)
  {
    this.player = this.playerService.getPlayer(playerNumber);
  }

  constructor(private playerService: PlayerService, private headerService: HeaderService, private router: Router) { }

  ngOnInit(): void
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

    this.initCanvas();
    this.updateCanvas();
  }

  @HostListener('window:resize')
  onResize()
  {
    this.updateCanvas()
  }

  initCanvas(): void
  {
    if (!this.player?.boardGame || !this.player?.annotations?.predictions)
    {
      console.error("Init: Missing image or annotations:", this.player?.boardGame, this.player?.annotations?.predictions)
      throw new Error("Init: Missing image or annotations:");
    }

    const img = new Image();
    img.src = this.player.boardGame;

    const canvas = new fabric.Canvas('annotationCanvas',
      {
        selection: false, // disable group selection for simplicity
        allowTouchScrolling: true,
        skipOffscreen: false
      }
    );

    const fabricImg = new fabric.FabricImage(img, {
      originX: "left",
      originY: "top",
    })

    canvas.backgroundImage = fabricImg;

    this.currentPredictions = this.player?.annotations?.predictions

    this.canvas = canvas

  }

  updateCanvas(): void
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

    // Prevent redrawing when mobile chrome adressbar gets visible
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    if (Math.trunc(this.currentWidth) == Math.trunc(width) && Math.trunc(this.currentHeight) == Math.trunc(height))
    {
      return
    }

    this.currentWidth = width
    this.currentHeight = height


    const img = new Image();
    img.src = this.player.boardGame;

    width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const aspectRatio = img.width / img.height;

    const navBarHeight = document.getElementById("navBar")?.offsetHeight || 0;
    console.log("PageSize", width, height, navBarHeight);

    height -= navBarHeight;

    if (width / aspectRatio > height)
    {
      width = height * aspectRatio;
    } else
    {
      height = width / aspectRatio;
    }

    const scaleX = width / img.width
    const scaleY = height / img.height

    this.canvas.backgroundImage.scaleX = scaleX
    this.canvas.backgroundImage.scaleY = scaleY

    this.canvas.width = width
    this.canvas.height = height

    this.canvas.remove(...this.canvas.getObjects());

    this.canvas.setDimensions({ width: width, height: height });

    for (const prediction of this.currentPredictions)
    {
      let rect = new fabric.Rect({
        left: (prediction.x - prediction.width / 2) * scaleX,
        top: (prediction.y - prediction.height / 2) * scaleY,
        width: prediction.width * scaleX,
        height: prediction.height * scaleY,
        fill: 'rgba(255, 0, 0, 0.3)',
        stroke: 'red',
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

  saveEdit(button: NavButton)
  {
  }

  cancelEdit(button: NavButton)
  {
    this.router.navigate(['/']);
  }
}
