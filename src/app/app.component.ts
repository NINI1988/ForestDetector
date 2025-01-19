import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageAnnotatorService } from './image-annotator.service';
import { lastValueFrom } from 'rxjs';
import { RoboflowResult } from './roboflow-response';

interface Row {
  name: string;
  boardGame: string | null; // image base64 string
  annotations: RoboflowResult | null;
  cardsInCave: number;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private imageAnnotator: ImageAnnotatorService) { }

    rows: Row[] = [
      { name: '', boardGame: null, annotations: null, cardsInCave: 0 },
      { name: '', boardGame: null, annotations: null, cardsInCave: 0 },
      { name: '', boardGame: null, annotations: null, cardsInCave: 0 },
      { name: '', boardGame: null, annotations: null, cardsInCave: 0 },
      { name: '', boardGame: null, annotations: null, cardsInCave: 0 }
    ]


  /**
   * Called when user picks or takes a photo.
   * We store the DataURL for preview and later submit.
   */
  onFileSelected(index: number, event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Store the base64 image data in the row
        this.rows[index].boardGame = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Called when Submit button is clicked
   */
  async submit() {

    console.log('Submitted data:', this.rows);

    const annotationPromises = this.rows
      .filter(row => row.boardGame)
      .map(row => lastValueFrom(this.imageAnnotator.annotate(row.boardGame!)));

    try {
      const results = await Promise.all(annotationPromises);
      results.forEach((result, index) => {
        this.rows[index].annotations = result;
      });
      console.log('Annotation results:', results);
    } catch (error) {
      console.error('Error annotating images:', error);
    }

  }
}
