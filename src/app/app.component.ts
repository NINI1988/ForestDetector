import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageAnnotatorService } from './image-annotator.service';
import { lastValueFrom } from 'rxjs';
import { PredictionResult } from '../model/prediction-result';

interface Player
{
  name: string;
  boardGame: string | null; // image base64 string
  annotations: PredictionResult | null;
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

  constructor(private imageAnnotator: ImageAnnotatorService) { }

  ngOnInit()
  {
    for (let i = 0; i < this.PLAYER_COUNT; i++)
    {
      this.players.push({ name: '', boardGame: null, annotations: null, cardsInCave: 0 })
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

    console.log('Submitted data:', this.players);

    const annotationPromises = this.players
      .filter(player => player.boardGame)  // ignore player without board game image
      .map(player => lastValueFrom(this.imageAnnotator.annotate(player.boardGame!)));

    try
    {
      const results = await Promise.all(annotationPromises);
      results.forEach((result, index) =>
      {
        this.players[index].annotations = result;
      });
      console.log('Annotation results:', results);
    } catch (error)
    {
      console.error('Error annotating images:', error);
    }

  }
}
