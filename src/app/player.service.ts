import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService
{
  PLAYER_COUNT = 5

  players: Player[] = [];

  constructor()
  {
    this.initializePlayers(this.PLAYER_COUNT);
    this.players[0].boardGame = environment.image_player1;
    // this.players[0].annotations = environment.annotation_player1;
    this.players[1].boardGame = environment.image_player1;
    this.players[1].annotations = environment.annotation_player1;
  }

  initializePlayers(count: number)
  {
    this.players = [];
    for (let i = 0; i < count; i++)
    {
      this.players.push({ name: ``, cardsInCave: 0 });
    }
  }

  getPlayer(index: number): Player | undefined
  {
    return this.players[index];
  }

  updatePlayerBoardGame(index: number, boardGame: string)
  {
    if (this.players[index])
    {
      this.players[index].boardGame = boardGame;
    }
  }
}
