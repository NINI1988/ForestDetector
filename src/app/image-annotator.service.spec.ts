import { TestBed } from '@angular/core/testing';
import { ImageAnnotatorService } from './image-annotator.service';
import { provideHttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import * as predictionResult161Points from '../../test_data/responses/161Points.json';
import { image_player1 as image_161Points } from "../../test_data/responses/161Points";

describe('ImageAnnotator', () =>
{
  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ImageAnnotatorService,
        provideHttpClient()
      ]
    });
  });

  it('should create an instance', async () =>
  {
    const service = TestBed.inject(ImageAnnotatorService);
    const result = await service.annotate(image_161Points)
    expect(result.predictions.length).toEqual(29)
    // expect(result).toEqual(predictionResult161Points)
  });
});
