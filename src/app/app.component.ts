import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ForestDetector';

  // Our default 5 rows
  rows = [
    { name: '', boardGame: null, cardsInCave: 0 },
    { name: '', boardGame: null, cardsInCave: 0 },
    { name: '', boardGame: null, cardsInCave: 0 },
    { name: '', boardGame: null, cardsInCave: 0 },
    { name: '', boardGame: null, cardsInCave: 0 },
  ];

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
  submit() {
    // Here you can handle the final data.
    console.log('Submitted data:', this.rows);

    // You can call an API, pass it somewhere else, etc.
    // yourCustomFunction(this.rows);
  }
}
