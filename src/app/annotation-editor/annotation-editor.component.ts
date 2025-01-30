import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  @Input() set id(playerNumber: number)
  {
    console.log("Input", playerNumber)
    // const playerNumber = +this.route.snapshot.paramMap.get('playerNumber')!;
    this.player = this.playerService.getPlayer(playerNumber);
  }

  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit(): void
  {
    console.log("ngOnInit")
  }
}
