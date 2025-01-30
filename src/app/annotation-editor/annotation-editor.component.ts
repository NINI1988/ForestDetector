import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../player.service';
import { Player } from '../../model/player';

@Component({
  selector: 'app-annotation-editor',
  templateUrl: './annotation-editor.component.html',
  styleUrls: ['./annotation-editor.component.css'],
  imports: [CommonModule]
})
export class AnnotationEditorComponent implements OnInit
{
  player: Player | undefined;

  @Input() set playerNumber(playerNumber: number)
  {
    this.player = this.playerService.getPlayer(playerNumber);
  }

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void
  {

  }
}
