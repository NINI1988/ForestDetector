import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageAnnotatorService } from '../image-annotator.service';
import { PlayerService } from '../player.service';
import { ForestAssembler } from '../../model/forest-assembler';
import { Forest } from '../../model/forest';
import { HeaderService, NavButton } from '../header.service';
import { DownloadProgressComponent } from "../download-progress/download-progress.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule, DownloadProgressComponent],
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

    // Just for development
    for (const [playerIndex, player] of this.playerService.players.entries())
    {
      if (player.boardGame && !player.annotations)
      {
        this.predictPlayer(playerIndex, player.boardGame);
      }
    }
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
        // console.log('Image:', e.target.result);

        await this.predictPlayer(index, e.target.result)
      };
      reader.readAsDataURL(file);
    }
  }

  async predictPlayer(playerIndex: number, image: string)
  {
    const player = this.playerService.players[playerIndex]
    try
    {
      player.annotating = true
      // Store the base64 image data in the player
      this.playerService.updatePlayerBoardGame(playerIndex, image);

      setTimeout(async () => // Display image before running detection
      {
        const predictionResult = await this.imageAnnotator.annotate(image);
        player.annotations = predictionResult;
        player.annotating = false
      }, 100);
    } catch (error)
    {
      console.error('Error annotating image:', error);
      player.annotating = false
    }
  }

  private rotateTimeouts = new Map<number, any>();
  async onRotateImage(playerIndex: number)
  {
    const image = this.playerService.getPlayer(playerIndex)?.boardGame
    if (image)
    {
      const rotatedImage = await this.rotateImage(image, 90)
      this.playerService.updatePlayerBoardGame(playerIndex, rotatedImage);

      if (this.rotateTimeouts.has(playerIndex))
      {
        clearTimeout(this.rotateTimeouts.get(playerIndex));
      }
      // predictPlayer only after user does not trigger rotate again
      this.rotateTimeouts.set(playerIndex, setTimeout(async () =>
      {
        await this.predictPlayer(playerIndex, rotatedImage)
        this.rotateTimeouts.delete(playerIndex);
      }, 1000));
    }
  }

  rotateImage(imageSrc: string, angle: number): Promise<string>
  {
    return new Promise((resolve) =>
    {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () =>
      {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Could not get context");

        // Set canvas size dynamically based on rotation
        if (angle === 90 || angle === 270)
        {
          canvas.width = img.height;
          canvas.height = img.width;
        } else
        {
          canvas.width = img.width;
          canvas.height = img.height;
        }

        // Move origin to center and rotate
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate((angle * Math.PI) / 180); // Negative to correct orientation

        // Draw image at new position
        context.drawImage(img, -img.width / 2, -img.height / 2);

        // Convert canvas to Base64 image string
        resolve(canvas.toDataURL());
      };
    });
  }

  /**
   * Called when Submit button is clicked
   */
  async submit()
  {
    this.allForests.length = 0; // clear all forests

    try
    {
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
    }
    catch (error)
    {
      alert(error);
    }
    finally
    {
      this.isLoading = false;

      setTimeout(() =>
      {
        window.scrollTo(0, document.body.scrollHeight);
      })
    }

  }

}
