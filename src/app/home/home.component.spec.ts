import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockImageAnnotatorService } from '../../mocks/mock-image-annotator.service';
import { HomeComponent } from './home.component';
import { ImageAnnotatorService } from '../image-annotator.service';
import { ForestAssembler } from '../../model/forest-assembler';

describe('HomeComponent', () =>
{
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: ImageAnnotatorService, useClass: MockImageAnnotatorService }, // Use mock service
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should include the player name when forest assembly fails', async () =>
  {
    const player = component.playerService.players[0];
    player.name = 'Alice';
    player.annotations = {} as any;

    spyOn(ForestAssembler, 'assembleForest').and.throwError('No nearest card found');
    const alertSpy = spyOn(window, 'alert');

    await component.submit();

    expect(alertSpy).toHaveBeenCalledWith(jasmine.stringMatching(/Alice.*No nearest card found/));
  });

});
