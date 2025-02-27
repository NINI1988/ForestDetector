import { PredictionResult } from "./prediction-result";

export interface Player
{
  name: string;
  boardGame?: string; // image base64 string
  rotateTimeout?: ReturnType<typeof setTimeout> // store timeout
  boardGameContainerHeight: number
  rotating: boolean // if rotating mode is currently active
  rotationAngle: number // the current rotation of the boardGame image in degrees
  annotations?: PredictionResult;
  annotating: boolean;
  cardsInCave: number;
}
