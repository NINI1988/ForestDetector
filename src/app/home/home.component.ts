import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageAnnotatorService } from '../image-annotator.service';
import { PlayerService } from '../player.service';
import { ForestAssembler } from '../../model/forest-assembler';
import { Forest } from '../../model/forest';
import { HeaderService, NavButton } from '../header.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  allForests: Forest[] = [];

  isLoading = false;
  uploadData = true;

  constructor(private imageAnnotator: ImageAnnotatorService, private router: Router, public playerService: PlayerService, private headerService: HeaderService) { }

  ngOnInit(): void
  {
    this.headerService.setButtons([
      {
        label: '',
        icon: 'bi-question-circle',
        class: 'btn-primary',
        action: this.showHelp,
        visible: true
      }
    ]);
  }

  showHelp(button: NavButton)
  {
    alert('Help dialog opened');
  }

  /**
   * Called when user picks or takes a photo.
   * We store the DataURL for preview and later submit.
   */
  onFileSelected(index: number, event: any)
  {
    const file = event.target.files[0];
    if (file)
    {
      const reader = new FileReader();
      reader.onload = async (e: any) =>
      {
        // Store the base64 image data in the player
        this.playerService.updatePlayerBoardGame(index, e.target.result);

        console.log('Image:', e.target.result);

        // Directly call the annotation service
        try
        {
          // await new Promise(resolve => setTimeout(resolve, 1000));
          // this.playerService.players[index].annotations = <PredictionResult>{}

          const predictionResult = await lastValueFrom(this.imageAnnotator.annotate(e.target.result));
          this.playerService.players[index].annotations = predictionResult;
        } catch (error)
        {
          console.error('Error annotating image:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Called when Submit button is clicked
   */
  async submit()
  {
    this.allForests.length = 0; // clear all forests

    this.isLoading = true;
    const players = this.playerService.players
    console.log('Submitted data:', players);

    for (const [playerIndex, player] of players.entries())
    {
      if (player.annotations)
      {
        const playerName = player.name || `Player${playerIndex + 1}`

        const forest = new Forest(playerName, this.allForests)
        this.allForests.push(forest)

        const forestCards = ForestAssembler.assembleForest(player.annotations);

        forest.setCards(forestCards)
        forest.caveCount = player.cardsInCave
      }
    }

    for (const forest of this.allForests)
    {
      forest.updatePoints()
    }

    this.isLoading = false;
  }

}
