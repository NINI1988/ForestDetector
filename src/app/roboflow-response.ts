export interface RoboflowResult {
  inference_id: string;
  time:         number;
  image:        Image;
  predictions:  Prediction[];
}

export interface Image {
  width:  number;
  height: number;
}

export interface Prediction {
  x:            number;
  y:            number;
  width:        number;
  height:       number;
  confidence:   number;
  class:        string;
  class_id:     number;
  detection_id: string;
}
