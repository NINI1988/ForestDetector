import { Card, CardParam } from '@/model/Forest';
import { Forest } from './forest';
import { cards } from './cards';
import { CardPosition } from './card-position';
import { CardId } from './card-id';

export class ParamHandler
{
  private handleNothingToDo(_card: Card, _param: CardParam, _forest: Forest)
  {
    // Eg: colors already handled Forest.addCardColor
  }

  private handleFullyOccupiedTree(forest: Forest, baseIndex: number): boolean
  {
    const positionLength = Object.keys(CardPosition).length;
    const positionsOccupied: boolean[] = new Array(positionLength).fill(false)
    const cardsOnBase = forest.getCardsOnBase(baseIndex, undefined, true);
    for (const card of cardsOnBase)
    {
      if (card.baseIndex != baseIndex) continue;

      const cardInfo = cards[card.id]
      const positionIndex = Object.values(CardPosition).indexOf(cardInfo.position);
      positionsOccupied[positionIndex] = true
    }

    // Return true when all positions are occupied
    return positionsOccupied.every(position => position);
  }

  private handleFullyOccupiedTrees(_card: Card, param: CardParam, forest: Forest)
  {
    for (const forestCard of forest.forestCards)
    {
      const cardInfo = cards[forestCard.id]
      if (cardInfo.position == CardPosition.BASE)
      {
        const fullyOccupied = this.handleFullyOccupiedTree(forest, forestCard.baseIndex)
        if (fullyOccupied)
        {
          param.value++
        }
      }
    }
  }

  private handleCardsAttachedToSilverFirs(_card: Card, param: CardParam, forest: Forest)
  {
    for (const forestCard of forest.forestCards)
    {
      const cardInfo = cards[forestCard.id]
      if (cardInfo.speci == CardId.SILVER_FIR)
      {
        const cardsOnBase = forest.getCardsOnBase(forestCard.baseIndex)
        param.value += cardsOnBase.length;
      }
    }
  }

  private handleSharingACardSlot(_card: Card, param: CardParam, forest: Forest)
  {
    for (const forestCard of forest.forestCards)
    {
      const cardInfo = cards[forestCard.id]
      if (cardInfo.speci == CardId.COMMON_TOAD)
      {
        const cardsOnBase = forest.getCardsOnBase(forestCard.baseIndex, CardId.COMMON_TOAD)
        if (cardsOnBase.length > 1)
        {
          param.value++;
        }
      }
    }
  }

  private handleEuropeanPolecatAloneOnTreeOrShrub(_card: Card, param: CardParam, forest: Forest)
  {
    for (const forestCard of forest.forestCards)
    {
      const cardInfo = cards[forestCard.id]
      if (cardInfo.speci == CardId.EUROPEAN_POLECAT)
      {
        const cardsOnBase = forest.getCardsOnBase(forestCard.baseIndex)
        if (cardsOnBase.length == 1)
        {
          param.value++;
        }
      }
    }
  }

  private countCardsOnBase(forest: Forest, cardId: CardId, baseId: CardId | CardId[]): number
  {
    let count = 0;
    const baseIds = Array.isArray(baseId) ? baseId : [baseId];
    for (const forestCard of forest.forestCards)
    {
      const cardInfo = cards[forestCard.id]
      if (cardInfo.speci == cardId)
      {
        const base = forest.getBase(forestCard.baseIndex)
        const baseInfo = cards[forestCard.id]
        if (baseIds.includes(baseInfo.speci))
        {
          count++;
        }
      }
    }
    return count;
  }

  private handleChaffinchesAtopABeech(_card: Card, param: CardParam, forest: Forest)
  {
    param.value += this.countCardsOnBase(forest, CardId.CHAFFINCH, CardId.BEECH)
  }

  private handleNightingalesAtopAShrub(_card: Card, param: CardParam, forest: Forest)
  {
    param.value += this.countCardsOnBase(forest, CardId.CHAFFINCH, [CardId.SAMBUCUS, CardId.COMMON_HAZEL, CardId.BLACKTHORN])
  }

  private handleRedSquirrelsAtopAnOak(_card: Card, param: CardParam, forest: Forest)
  {
    param.value += this.countCardsOnBase(forest, CardId.RED_SQUIRREL, CardId.OAK)
  }

  private handleBatOnTheOtherSide(_card: Card, param: CardParam, forest: Forest)
  {
    for (const forestCard of forest.forestCards)
    {
      const cardInfo = cards[forestCard.id]
      if (cardInfo.speci == CardId.EUROPEAN_FAT_DORMOUSE)
      {
        const cardsOnBase = forest.getCardsOnBase(forestCard.baseIndex)
        for (const cardOnBase of cardsOnBase)
        {
          const cardOnBaseInfo = cards[forestCard.id]
          const glCard = forest.findCard(cardOnBaseInfo.glCardName)
          if (glCard.symbols?.includes('bat'))
          {
            param.value++;
          }
        }
      }
    }
  }

  private handleVioletCarpenterBeeOnABeech(_card: Card, param: CardParam, forest: Forest)
  {
    param.value += this.countCardsOnBase(forest, CardId.VIOLET_CARPENTER_BEE, CardId.BEECH)
  }

  private handleVioletCarpenterBeeOnAHorseChestnut(_card: Card, param: CardParam, forest: Forest)
  {
    param.value += this.countCardsOnBase(forest, CardId.VIOLET_CARPENTER_BEE, CardId.HORSE_CHESTNUT)
  }

  private handleVioletCarpenterBeeOnALinden(_card: Card, param: CardParam, forest: Forest)
  {
    param.value += this.countCardsOnBase(forest, CardId.VIOLET_CARPENTER_BEE, CardId.LINDEN)
  }

  private paramHandlers: { [key: string]: (card: Card, param: CardParam, forest: Forest) => void } = {
    "hasMostLindens": this.handleNothingToDo.bind(this), // Will use distributed count of all forests
    "hasMostTrees": this.handleNothingToDo.bind(this), // Will use distributed count of all forests

    "fullyOccupiedTrees": this.handleFullyOccupiedTrees.bind(this), // beechMarten
    "cardsAttachedToSilverFirs": this.handleCardsAttachedToSilverFirs.bind(this),
    "sharingACardSlot": this.handleSharingACardSlot.bind(this), // commonToad
    "europeanPolecatAloneOnTreeOrShrub": this.handleEuropeanPolecatAloneOnTreeOrShrub.bind(this), // europeanPolecat
    "chaffinchesAtopABeech": this.handleChaffinchesAtopABeech.bind(this),
    "nightingalesAtopAShrub": this.handleNightingalesAtopAShrub.bind(this),
    "redSquirrelsAtopAnOak": this.handleRedSquirrelsAtopAnOak.bind(this),
    "batOnTheOtherSide": this.handleBatOnTheOtherSide.bind(this),

    "onABeech": this.handleVioletCarpenterBeeOnABeech.bind(this), // violetCarpenterBee
    "onAHorseChestnut": this.handleVioletCarpenterBeeOnAHorseChestnut.bind(this), // violetCarpenterBee
    "onALinden": this.handleVioletCarpenterBeeOnALinden.bind(this), // violetCarpenterBee

    // Colors already handled by Forest.addCardColor
    "beechCount": this.handleNothingToDo.bind(this),
    "oakCount": this.handleNothingToDo.bind(this),
    "birchCount": this.handleNothingToDo.bind(this),
    "horseChestnutCount": this.handleNothingToDo.bind(this),
    "lindenCount": this.handleNothingToDo.bind(this),
    "silverFirCount": this.handleNothingToDo.bind(this),
    "stonePineCount": this.handleNothingToDo.bind(this),
    "europeanLarchCount": this.handleNothingToDo.bind(this),
    "douglasFirCount": this.handleNothingToDo.bind(this),
  }

  handleParam(card: Card, param: CardParam, forest: Forest)
  {
    const paramHandler = this.paramHandlers[param.name]
    if (!paramHandler)
    {
      throw RangeError(`Parameter '${param.name}' has no handler defined in ParamHandler`)
    }
    paramHandler(card, param, forest)
  }

}
