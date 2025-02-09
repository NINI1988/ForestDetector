import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadService } from '../download.service';
import { debounceTime, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-download-progress',
  imports: [CommonModule],
  templateUrl: './download-progress.component.html',
  styleUrl: './download-progress.component.css'
})
export class DownloadProgressComponent
{
  isLoading$: Observable<boolean>;
  loadingProgress$: Subject<number>;

  constructor(private downloadService: DownloadService)
  {
    this.loadingProgress$ = this.downloadService.loadingProgress;

    this.isLoading$ = this.downloadService.isLoading.asObservable().pipe(
      debounceTime(1000) // Only emit true if loading takes more than 1 second
    );
  }

}
