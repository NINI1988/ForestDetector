import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageAnnotatorService } from '../image-annotator.service';
import { PlayerService } from '../player.service';
import { ForestAssembler } from '../../model/forest-assembler';
import { Forest } from '../../model/forest';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent
{
  allForests: Forest[] = [];

  isLoading = false;
  uploadData = true;

  constructor(private imageAnnotator: ImageAnnotatorService, private router: Router, public playerService: PlayerService) { }

  ngOnInit()
  {
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
      reader.onload = (e: any) =>
      {
        // Store the base64 image data in the player
        this.playerService.updatePlayerBoardGame(index, e.target.result);
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
    console.log('Submitted data:', this.playerService.players);

    const annotationPromises = this.playerService.players.map(player =>
      player.boardGame
        ? lastValueFrom(this.imageAnnotator.annotate(player.boardGame))
        : Promise.resolve(null)
    );

    try
    {
      const predictionResults = await Promise.all(annotationPromises);

      predictionResults.forEach((predictionResult, index) =>
      {
        if (predictionResult != null)
        {
          let player = this.playerService.players[index]

          const playerName = player.name || `Player${index + 1}`

          const forest = new Forest(playerName, this.allForests)
          this.allForests.push(forest)

          player.annotations = predictionResult;

          const forestCards = ForestAssembler.assembleForest(predictionResult);

          forest.setCards(forestCards)
          forest.caveCount = player.cardsInCave
        }

      });

      for (const forest of this.allForests)
      {
        forest.updatePoints()
      }

      console.log('Annotation results:', predictionResults);
    } catch (error)
    {
      console.error('Error annotating images:', error);
    } finally
    {
      this.isLoading = false;
    }

  }

  editPlayer(playerNumber: number)
  {
    this.router.navigate([`/edit/${playerNumber}`]);
  }
}
