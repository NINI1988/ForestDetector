import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Prediction, PredictionResult } from '../model/prediction-result';
import * as ort from 'onnxruntime-web';
import { DownloadService } from './download.service';


@Injectable({
  providedIn: 'root'
})
export class ImageAnnotatorService
{

  private session: Promise<ort.InferenceSession>;

  constructor(public downloadService: DownloadService)
  {
    this.session = this.loadResources()
  }

  private async loadResources(): Promise<ort.InferenceSession>
  {
    const wasmUrl = `assets/onnxruntime-web/ort-wasm-simd-threaded.wasm`;
    const modelUrl = `assets/models/best.onnx`;

    const [wasmBinary, modelBinary] = await this.downloadService.loadResources([wasmUrl, modelUrl])

    ort.env.wasm.wasmBinary = wasmBinary;

    return ort.InferenceSession.create(modelBinary);
  }

  public async annotate(image: string): Promise<PredictionResult>
  {
    const [input, img_width, img_height] = await this.prepare_input(image);

    const inputArray = new ort.Tensor(Float32Array.from(input), [1, 3, 640, 640]);
    const session = await this.session
    const outputs = await session.run({ images: inputArray });
    return this.process_output(outputs["output0"].data, img_width, img_height);
  }

  private iou(box1: Prediction, box2: Prediction)
  {
    return this.intersection(box1, box2) / this.union(box1, box2);
  }

  private union(box1: Prediction, box2: Prediction)
  {
    const box1_area = (box1.width) * (box1.height)
    const box2_area = (box2.width) * (box2.height)
    return box1_area + box2_area - this.intersection(box1, box2)
  }

  private intersection(box1: Prediction, box2: Prediction): number
  {
    // Compute bounding box coordinates
    const box1_x1 = box1.x;
    const box1_y1 = box1.y;
    const box1_x2 = box1.x + box1.width;
    const box1_y2 = box1.y + box1.height;

    const box2_x1 = box2.x;
    const box2_y1 = box2.y;
    const box2_x2 = box2.x + box2.width;
    const box2_y2 = box2.y + box2.height;

    // Compute intersection coordinates
    const x1 = Math.max(box1_x1, box2_x1);
    const y1 = Math.max(box1_y1, box2_y1);
    const x2 = Math.min(box1_x2, box2_x2);
    const y2 = Math.min(box1_y2, box2_y2);

    // Ensure there is an intersection
    if (x2 <= x1 || y2 <= y1)
    {
      return 0; // No intersection
    }

    return (x2 - x1) * (y2 - y1); // Area of intersection
  }

  private async resizeAndPadTo640(base64: string): Promise<{ imageData: ImageData, imgWidth: number, imgHeight: number }>
  {
    return new Promise((resolve, reject) =>
    {
      const img = new Image();
      img.src = base64;
      img.onload = () =>
      {
        const scale = 640 / Math.max(img.width, img.height);
        const newWidth = Math.round(img.width * scale);
        const newHeight = Math.round(img.height * scale);

        const canvas = document.createElement("canvas");
        canvas.width = 640;
        canvas.height = 640;
        const ctx = canvas.getContext("2d");
        if (!ctx)
        {
          reject("Canvas context is not supported");
          return;
        }

        ctx.fillStyle = "black"; // Use black padding (adjust if needed)
        ctx.fillRect(0, 0, 640, 640);

        const xOffset = (640 - newWidth) / 2;
        const yOffset = (640 - newHeight) / 2;
        ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);

        resolve({ imageData: ctx.getImageData(0, 0, 640, 640), imgWidth: img.width, imgHeight: img.height });
      };
      img.onerror = (err) => reject(err);
    });
  }

  private async prepare_input(image: string): Promise<[number[], number, number]>
  {
    return new Promise(resolve =>
    {
      const img = new Image();
      img.src = image;
      img.onload = () =>
      {
        const [img_width, img_height] = [img.width, img.height]
        const canvas = document.createElement("canvas");
        canvas.width = 640;
        canvas.height = 640;
        const context = canvas.getContext("2d");
        if (!context)
        {
          throw new Error('Could not get context');
        }
        context.drawImage(img, 0, 0, 640, 640);
        const imgData = context.getImageData(0, 0, 640, 640);
        const pixels = imgData.data;

        const red = [], green = [], blue = [];
        for (let index = 0; index < pixels.length; index += 4)
        {
          red.push(pixels[index] / 255.0);
          green.push(pixels[index + 1] / 255.0);
          blue.push(pixels[index + 2] / 255.0);
        }
        const input = [...red, ...green, ...blue];
        resolve([input, img_width, img_height])
      }
    })
  }

  private process_output(modelData: any[] | Float32Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int8Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | BigInt64Array<ArrayBufferLike> | Float64Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, img_width: number, img_height: number)
  {
    let predictions: Prediction[] = [];

    for (let index = 0; index < 8400; index++)
    {
      const [class_id, prob] = [...Array(267).keys()]
        .map(col => [col, modelData[8400 * (col + 4) + index]])
        .reduce((accum, item) => item[1] > accum[1] ? item : accum, [0, 0]);
      if (prob < 0.5)
      {
        continue;
      }
      // const label = yolo_classes[class_id];
      const label = class_id;
      const xc = modelData[index];
      const yc = modelData[8400 + index];
      const w = modelData[2 * 8400 + index];
      const h = modelData[3 * 8400 + index];

      const x = (xc) / 640 * img_width;
      const y = (yc) / 640 * img_height;
      const width = (w) / 640 * img_width;
      const height = (h) / 640 * img_height;

      predictions.push({
        class: label,
        class_id: class_id,
        confidence: prob,
        detection_id: "",
        x: x,
        y: y,
        width: width,
        height: height
      })

    }

    predictions = predictions.sort((box1, box2) => box2.class_id - box1.class_id)
    const predictionsFiltered = [];
    while (predictions.length > 0)
    {
      predictionsFiltered.push(predictions[0]);
      predictions = predictions.filter(box => this.iou(predictions[0], box) < 0.7);
    }

    const result: PredictionResult = {
      time: 0, //endTime - startTime,
      image: { width: img_width, height: img_height },
      predictions: predictionsFiltered
    }
    return result;
  }

}
