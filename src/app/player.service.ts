import { Injectable } from '@angular/core';
import { Player } from '../model/player';

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
