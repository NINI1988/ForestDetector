import { Forest as GlForest } from '@/model/Forest';
import { cards } from './cards';
import { CardColor, cardColorToGlSymbol } from './card-color';
import { ParamHandler } from './param-handler';
import { CardPosition } from './card-position';
import { CardId } from './card-id';


export type ForestCard = {
  id: string;
  color: string;
  baseIndex: number; // to which base card is this card assigned or which base card it is
};

export class Forest extends GlForest
{

  forestCards: ForestCard[] = []

  /**
   * Get all cards on a base, specified by baseIndex.
   * @param baseIndex
   * @param returnBase Default = false
   * @returns
   */
  public getCardsOnBase(baseIndex: number, speci?: CardId, returnBase: boolean = false): ForestCard[]
  {
    const cardsOnBase: ForestCard[] = [];
    for (const forestCard of this.forestCards)
    {
      if (forestCard.baseIndex != baseIndex) continue;
      const cardInfo = cards[forestCard.id]
      if (speci != undefined && speci != cardInfo.speci) continue;
      if (returnBase || cardInfo.position != CardPosition.BASE)
      {
        cardsOnBase.push(forestCard)
      }
    }
    return cardsOnBase;
  }

  public getBase(baseIndex: number): ForestCard
  {
    for (const forestCard of this.forestCards)
    {
      if (forestCard.baseIndex != baseIndex) continue;
      const cardInfo = cards[forestCard.id]
      if (cardInfo.position == CardPosition.BASE)
      {
        return forestCard;
      }
    }
    throw new Error(`No base found with index: '${baseIndex}'!`)
  }

  private addCardColor(color: CardColor)
  {
    const glSymbol = cardColorToGlSymbol(color)
    this[glSymbol + 'Count']++;
  }

  private handleParams()
  {
    const paramHandler = new ParamHandler();

    for (const card of this.cards)
    {
      if (card.params)
      {
        for (const param of card.params)
        {
          paramHandler.handleParam(card, param, this);
        }
      }
    }

  }

  public setCards(forestCards: ForestCard[])
  {
    this.forestCards = forestCards

    for (const card of forestCards)
    {
      const cardInfo = cards[card.id]
      const glCardName = cardInfo.glCardName
      try
      {
        const glCard = this.findCard(glCardName)
        glCard.count++;
      } catch (error)
      {
        if (error instanceof Error)
        {
          const errorMsg = `Adding Card '${glCardName}' cause an error '${error.message}'`;
          console.error(errorMsg)
          // throw Error(errorMsg)
        } else
        {
          console.error(error)
          // throw error;
        }
      }

      this.addCardColor(cardInfo.color)
    }

    this.handleParams()

  }
}
