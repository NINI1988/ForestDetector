export type ForestCard = {
  id: string;
  color: string;
  baseIndex: number; // to which base card is this card assigned or which base card it is
};

export class Forest
{
  private forestCards: ForestCard[] = [];

  // constructor(forestCards?: ForestCard[]) {
  //   this.forestCards = forestCards;
  // }

  public addCard(card: ForestCard): void
  {
    this.forestCards.push(card);
  }

  public getCards(): ForestCard[]
  {
    return this.forestCards;
  }
}
