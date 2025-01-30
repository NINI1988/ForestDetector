import { PredictionResult } from "./prediction-result";

export interface Player
{
  name: string;
  boardGame?: string; // image base64 string
  annotations?: PredictionResult;
  cardsInCave: number;
}
