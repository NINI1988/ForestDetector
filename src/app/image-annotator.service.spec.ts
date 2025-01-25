import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ImageAnnotatorService } from './image-annotator.service';
import { provideHttpClient } from '@angular/common/http';

// describe('ImageAnnotator', () =>
// {
//   beforeEach(() =>
//   {
//     TestBed.configureTestingModule({
//       imports: [],
//       providers: [ImageAnnotatorService,
//         provideHttpClient(),
//         provideHttpClientTesting()]
//     });
//   });

//   it('should create an instance', () =>
//   {
//     const service = TestBed.inject(ImageAnnotatorService);
//     expect(service).toBeTruthy();
//   });
// });
