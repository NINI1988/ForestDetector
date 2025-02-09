import { Injectable } from '@angular/core';
import * as ort from 'onnxruntime-web';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService
{
  // Observable values to bind to the UI
  public loadingProgress = new BehaviorSubject<number>(0);
  public isLoading = new BehaviorSubject<boolean>(false);

  // Maps to track per‑file progress and expected sizes
  private progressMap: { [url: string]: number } = {};
  private expectedSizes: { [url: string]: number } = {};

  constructor()
  {
  }

  /**
   * Helper function to fetch a file with progress reporting and cache it.
   * @param url The URL to fetch.
   * @param progressCallback A callback to update downloaded bytes.
   * @returns A promise resolving with the file’s ArrayBuffer.
   */
  private async fetchAndCache(
    url: string,
    progressCallback: (downloaded: number, total: number) => void
  ): Promise<ArrayBuffer>
  {
    // If the file is already cached, load it and mark progress as complete.
    if (await this.isFileCached(url))
    {
      console.log(`Loading ${url} from Cache Storage...`);
      const cachedBuffer = await this.getCachedFile(url);
      // Report full progress for this file.
      progressCallback(this.expectedSizes[url] || 1, this.expectedSizes[url] || 1);
      return cachedBuffer;
    }

    console.log(`Downloading ${url}...`);
    const response = await fetch(url);
    if (!response.ok)
    {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    // Get the expected size from the headers.
    const contentLengthHeader = response.headers.get('Content-Length');
    const totalBytes = contentLengthHeader ? parseInt(contentLengthHeader, 10) : 0;
    this.expectedSizes[url] = totalBytes || 1; // Use 1 if unknown to avoid division by zero.

    // Read the response stream in chunks.
    const reader = response.body?.getReader();
    if (!reader)
    {
      throw new Error('ReadableStream not supported in this browser.');
    }
    let receivedLength = 0;
    const chunks: Uint8Array[] = [];
    while (true)
    {
      const { done, value } = await reader.read();
      if (done) break;
      if (value)
      {
        chunks.push(value);
        receivedLength += value.length;
        // Update progress for this file.
        progressCallback(receivedLength, this.expectedSizes[url]);
      }
    }

    // Combine chunks into one Uint8Array.
    const combined = new Uint8Array(receivedLength);
    let offset = 0;
    for (const chunk of chunks)
    {
      combined.set(chunk, offset);
      offset += chunk.length;
    }

    // Cache the downloaded file.
    await this.cacheFile(url, combined);
    return combined.buffer;
  }

  // ----- Caching helper functions -----

  private async cacheFile(url: string, data: Uint8Array): Promise<void>
  {
    const cache = await caches.open('download-cache');
    const response = new Response(data, {
      headers: { 'Content-Type': 'application/octet-stream' }
    });
    await cache.put(url, response);
  }

  private async getCachedFile(url: string): Promise<ArrayBuffer>
  {
    const cache = await caches.open('download-cache');
    const response = await cache.match(url);
    if (!response)
    {
      throw new Error(`Cached file not found for ${url}`);
    }
    return response.arrayBuffer();
  }

  private async isFileCached(url: string): Promise<boolean>
  {
    const cache = await caches.open('download-cache');
    const match = await cache.match(url);
    return !!match;
  }

  /**
   * Clears the download-cache and reloads the page.
   */
  public async clearCache(): Promise<void>
  {
    await caches.delete('download-cache');
    console.log('Cache cleared');
    window.location.reload();
  }

  // ----- Main resource loading method -----

  /**
   * Loads the ONNX model and WASM runtime (either from cache or by downloading),
   * updating a combined progress indicator.
   */
  public async loadResources(files: string[]): Promise<ArrayBuffer[]>
  {
    this.isLoading.next(true);

    // For files not cached, perform HEAD requests to determine expected sizes.
    for (const url of files)
    {
      this.expectedSizes[url] = 1;
      this.progressMap[url] = 1;

      if (!(await this.isFileCached(url)))
      {
        this.progressMap[url] = 0;
        try
        {
          const headResponse = await fetch(url, { method: 'HEAD' });
          const cl = headResponse.headers.get('Content-Length');
          this.expectedSizes[url] = cl ? parseInt(cl, 10) : 1;
        } catch (err)
        {
          console.warn(`HEAD request failed for ${url}, using default size 1.`);
          this.expectedSizes[url] = 1;
        }
      }
    }

    // Calculate total expected bytes across all files.
    const totalExpectedBytes = files.reduce((sum, url) => sum + (this.expectedSizes[url] || 1), 0);

    // Helper function to update the aggregated progress.
    const updateAggregatedProgress = () =>
    {
      const totalDownloaded = Object.values(this.progressMap).reduce((sum, bytes) => sum + bytes, 0);
      const aggregatedProgress = Math.min(100, Math.round((totalDownloaded / totalExpectedBytes) * 100));
      this.loadingProgress.next(aggregatedProgress);
    };

    // Create a progress callback for each file.
    const progressCallbacks: { [url: string]: (downloaded: number, total: number) => void } = {};
    files.forEach(url =>
    {
      progressCallbacks[url] = (downloaded: number, total: number) =>
      {
        this.progressMap[url] = downloaded;
        updateAggregatedProgress();
      };
    });

    // Download (or retrieve from cache) all files concurrently.
    const results: ArrayBuffer[] = await Promise.all(
      files.map(url => this.fetchAndCache(url, progressCallbacks[url]))
    );

    // Ensure progress is set to 100% once all files have been handled.
    this.loadingProgress.next(100);
    this.isLoading.next(false);
    console.log('All files loaded successfully using cached/downloaded data.');

    // Return the binary files as an array of ArrayBuffer.
    return results;
  }

}
