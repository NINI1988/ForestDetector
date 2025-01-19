import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoboflowResult } from './roboflow-response';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImageAnnotatorService {

  constructor(
    private http: HttpClient
  ) { }

  private getApiKey(): string | null {
    const hash = window.location.hash.substring(1); // Remove the '#' character
    const params = new URLSearchParams(hash);
    return params.get('api_key');
  }

  /**
   *
   * @param image base64 image string
   */
  public annotate(image: string): Observable<RoboflowResult> {

    let api_key = this.getApiKey()
    if (!api_key) {
      api_key = environment.api_key;
      if (!api_key) {

        const error = "Please specify api_key in url. https://nini1988.github.io/ForestDetector#api_key=XXX";
        console.error(error)
        return new Observable<RoboflowResult>(observer => {
          observer.error(error);
        });
      }
    }

    const url = 'https://detect.roboflow.com/forestdetector/15';
    const params = new HttpParams().set('api_key', api_key);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<RoboflowResult>(url, image, { headers, params })

  }

}
