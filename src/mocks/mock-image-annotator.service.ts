import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PredictionResult } from '../model/prediction-result';

@Injectable()
export class MockImageAnnotatorService
{

  constructor() { }

  annotate(image: string): Observable<PredictionResult>
  {
    // Mock response with all required fields
    const mockResponse: PredictionResult = {
      inference_id: "0",
      image: { width: 300, height: 100 },
      time: 5,
      predictions: [
        {
          x: 50,
          y: 50,
          width: 100,
          height: 100,
          confidence: 0.95, // Mock confidence score
          class: "tree", // Mock object class
          class_id: 1, // Mock class ID
          detection_id: "12345" // Mock detection ID
        },
        {
          x: 150,
          y: 150,
          width: 200,
          height: 200,
          confidence: 0.85,
          class: "rock",
          class_id: 2,
          detection_id: "67890"
        }
      ]
    };
    return of(mockResponse); // Simulating an API response
  }
}
