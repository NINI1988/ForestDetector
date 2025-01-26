import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageAnnotatorService } from './image-annotator.service';
import { lastValueFrom } from 'rxjs';
import { PredictionResult } from '../model/prediction-result';
import { Forest } from '../model/forest';
import { ForestAssembler } from '../model/forest-assembler';

interface Player
{
  name: string;
  boardGame?: string; // image base64 string
  annotations?: PredictionResult;
  cardsInCave: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  PLAYER_COUNT = 5
  players: Player[] = [];

  allForests: Forest[] = [];

  isLoading = false;
  uploadData = true;

  constructor(private imageAnnotator: ImageAnnotatorService) { }

  ngOnInit()
  {
    for (let i = 0; i < this.PLAYER_COUNT; i++)
    {
      this.players.push({ name: ``, cardsInCave: 0 })
    }
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
        this.players[index].boardGame = e.target.result;
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
    console.log('Submitted data:', this.players);

    const annotationPromises = this.players.map(player =>
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
          let player = this.players[index]

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
}
