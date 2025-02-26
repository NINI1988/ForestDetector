import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageAnnotatorService } from '../image-annotator.service';
import { PlayerService } from '../player.service';
import { ForestAssembler } from '../../model/forest-assembler';
import { Forest } from '../../model/forest';
import { HeaderService, NavButton } from '../header.service';
import { DownloadProgressComponent } from "../download-progress/download-progress.component";
import { HelpModalComponent } from '../help-modal/help-modal.component';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule, DownloadProgressComponent, NgbModalModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  @ViewChildren('boardgame') boardgameElements!: QueryList<ElementRef>;

  allForests: Forest[] = [];

  isLoading = false;
  uploadData = true;

  constructor(private imageAnnotator: ImageAnnotatorService, private router: Router, public playerService: PlayerService, private headerService: HeaderService, private modalService: NgbModal) { }

  ngOnInit(): void
  {
    this.headerService.setButtons([
      {
        label: '',
        icon: 'bi-question-circle',
        class: 'btn-primary',
        action: this.showHelpNav.bind(this),
        visible: true
      }
    ]);

    // Just for development
    for (const [playerIndex, player] of this.playerService.players.entries())
    {
      if (player.boardGame && !player.annotations)
      {
        this.predictPlayer(playerIndex);
      }
    }
  }

  /**
   * This function is called when help button is clicked in the navigation bar
   * @param button
   */
  showHelpNav(button: NavButton)
  {
    HelpModalComponent.open(this.modalService);
  }

  /**
   * Will be called when take picture/upload image will be clicked.
   * The first time a help will be displayed.
   */
  async handleImageOpen(fileInput: HTMLInputElement)
  {
    await HelpModalComponent.open(this.modalService, true);
    fileInput.click(); // Trigger the correct file input
  }

  /**
   * Called when user picks or takes a photo.
   * We store the DataURL for preview and later submit.
   */
  onFileSelected(playerIndex: number, event: any)
  {
    const file = event.target.files[0];
    if (file)
    {
      const reader = new FileReader();
      reader.onload = async (e: any) =>
      {
        // console.log('Image:', e.target.result);

        // Store the base64 image data in the player
        this.playerService.updatePlayerBoardGame(playerIndex, e.target.result);
        await this.predictPlayer(playerIndex)
      };
      reader.readAsDataURL(file);
    }
  }

  async predictPlayer(playerIndex: number)
  {
    const player = this.playerService.getPlayer(playerIndex)
    try
    {
      player.annotating = true

      setTimeout(async () => // Display image before running detection
      {
        if (!player.boardGame) throw new Error(`boardGame empty`);
        this.rotationAnimationEnd(playerIndex)
        const predictionResult = await this.imageAnnotator.annotate(player.boardGame, player.rotationAngle);
        player.annotations = predictionResult;
        player.annotating = false
      }, 100);
    } catch (error)
    {
      console.error('Error annotating image:', error);
      player.annotating = false
    }
  }

  private rotationAnimationStart(playerIndex: number)
  {
    const element: HTMLImageElement = this.boardgameElements.get(playerIndex)?.nativeElement

    const player = this.playerService.getPlayer(playerIndex)
    const size = Math.max(element.clientWidth, element.clientHeight)
    player.boardGameContainerHeight = size
  }

  private rotationAnimationEnd(playerIndex: number)
  {
    const element: HTMLImageElement = this.boardgameElements.get(playerIndex)?.nativeElement

    const player = this.playerService.getPlayer(playerIndex)

    const angle = player.rotationAngle % 360
    if (angle == 0 || angle == 180)
    {
      player.boardGameContainerHeight = element.clientHeight
    }
    else
    {
      player.boardGameContainerHeight = element.clientWidth
    }
  }

  async onRotateImage(playerIndex: number)
  {
    const player = this.playerService.getPlayer(playerIndex)
    player.rotating = true
    player.rotationAngle += 90;
    this.rotationAnimationStart(playerIndex)

    if (player.rotateTimeout)
    {
      clearTimeout(player.rotateTimeout);
    }
    // predictPlayer only after user does not trigger rotate again
    player.rotateTimeout = setTimeout(async () =>
    {
      this.rotationAnimationEnd(playerIndex)
      await this.predictPlayer(playerIndex)
      player.rotating = false
    }, 1000);
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
      }, 10)
    }

  }

}
