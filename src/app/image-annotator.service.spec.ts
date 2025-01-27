import { TestBed } from '@angular/core/testing';
import { ImageAnnotatorService } from './image-annotator.service';
import { provideHttpClient } from '@angular/common/http';

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
    expect(service).toBeTruthy()
  });
});
