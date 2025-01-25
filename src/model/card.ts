import { CardColor } from "./card-color";
import { CardPosition } from "./card-position";

export type Card = {
  speci: string;
  color: CardColor;
  position: CardPosition;
};
