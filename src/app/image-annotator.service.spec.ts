import { TestBed } from '@angular/core/testing';
import { ImageAnnotatorService } from './image-annotator.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import * as predictionResult161Points from '../../test_data/responses/161Points.json';
import { image_player1 as image_161Points } from "../../test_data/responses/161Points";
import { Forest } from '../model/forest';
import { ForestAssembler } from '../model/forest-assembler';

async function loadImageAsBase64(http: HttpClient, url: string): Promise<string>
{
  const blob = await lastValueFrom(http.get(url, { responseType: 'blob' }));
  return new Promise<string>((resolve, reject) =>
  {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

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
    const result = await service.annotate(image_161Points, 0)
    expect(result.predictions.length).toEqual(29)
    // expect(result).toEqual(predictionResult161Points)
  });

  it('calc point for test_data/bgg-pic8729756_102Points.jpg', async () =>
  {
    const http = TestBed.inject(HttpClient);
    const imageUrl = 'test_data/bgg-pic8729756_102Points.jpg';
    const base64Image = await loadImageAsBase64(http, imageUrl);

    const service = TestBed.inject(ImageAnnotatorService);
    const annotations = await service.annotate(base64Image, 0)

    const forest = new Forest("test", [])
    const forestCards = ForestAssembler.assembleForest(annotations);
    forest.setCards(forestCards)
    forest.updatePoints()
    expect(forest.points).toEqual(102)
  });
});
