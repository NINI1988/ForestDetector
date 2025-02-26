export interface PredictionResult
{
  time: number;
  predictions: Prediction[];
}

export interface Image
{
  width: number;
  height: number;
}

export interface Prediction
{
  x: number; // 0-1
  y: number; // 0-1
  width: number; // 0-1
  height: number; // 0-1
  confidence: number;
  class: string; // label
  class_id: number;
}
