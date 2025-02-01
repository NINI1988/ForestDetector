import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../player.service';
import { Player } from '../../model/player';
import * as fabric from 'fabric';

@Component({
  selector: 'app-annotation-editor',
  templateUrl: './annotation-editor.component.html',
  styleUrls: ['./annotation-editor.component.css'],
  imports: [CommonModule]
})
export class AnnotationEditorComponent implements OnInit, AfterViewInit
{
  player: Player | undefined;
  canvas: fabric.Canvas | undefined

  @Input() set playerNumber(playerNumber: number)
  {
    this.player = this.playerService.getPlayer(playerNumber);
  }

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void
  {
    console.log(this.player?.annotations)
  }

  ngAfterViewInit(): void
  {
    if (!this.player?.boardGame || !this.player?.annotations?.predictions)
    {
      console.error("Missing image or annotations:", this.player?.boardGame, this.player?.annotations?.predictions)
      throw new Error("Missing image or annotations:");
    }

    const img = new Image();
    img.src = this.player.boardGame;

    const aspectRatio = img.width / img.height;
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log("PageSize", width, height)

    if (width / aspectRatio > height)
    {
      width = height * aspectRatio;
    } else
    {
      height = width / aspectRatio;
    }

    const scaleX = width / img.width
    const scaleY = height / img.height


    img.onload = () =>
    {

      const fabricImg = new fabric.FabricImage(img, {
        originX: "left",
        originY: "top",
        scaleX: scaleX,
        scaleY: scaleY,
      })

      canvas.backgroundImage = fabricImg;
      canvas.renderAll();
    };

    const canvas = new fabric.Canvas('annotationCanvas',
      {
        selection: false, // disable group selection for simplicity
        width: width,
        height: height,
        allowTouchScrolling: true,
        skipOffscreen: false
      }
    );

    this.player?.annotations?.predictions?.forEach(prediction =>
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

      canvas.add(rect);
    });
    this.canvas = canvas

  }

}
