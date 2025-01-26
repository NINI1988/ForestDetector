import { CardColor } from "./card-color";
import { CardId } from "./card-id";
import { CardPosition } from "./card-position";

export type Card = {
  speci: CardId;
  color: CardColor;
  position: CardPosition;
  glCardName: string; // name of glaures forestshuffle card
};
