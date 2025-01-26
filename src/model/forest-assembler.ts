// This module reconstructs the forest by assigning the cards to the BASE(trees) cards.

import { Prediction, PredictionResult } from "./prediction-result";
import { cards } from "./cards";
import { ForestCard } from "./forest";
import { CardPosition } from "./card-position";
import { Card } from "./card";

export interface PredictionCard extends Prediction, Card
{
  baseIndex: number
}

const positionOrder: Record<CardPosition, number> = {
  [CardPosition.BASE]: 0,
  [CardPosition.LEFT]: 1,
  [CardPosition.RIGHT]: 2,
  [CardPosition.TOP]: 3,
  [CardPosition.BOTTOM]: 4,
};

export class ForestAssembler
{

  private static compareCards(a: PredictionCard, b: PredictionCard): number
  {

    if (a.position !== b.position)
    {
      return positionOrder[a.position] - positionOrder[b.position];
    }

    // Within the same position, we sort as follows:
    switch (a.position)
    {
      case CardPosition.BASE:
        // Sort base cards by row and then by column
        // Support slightly variation in y
        const yDiff = Math.abs(a.y - b.y)
        if (yDiff < a.height / 2)
        {
          return a.x - b.x;
        }
        else
        {
          return a.y - b.y;
        }

      case CardPosition.LEFT:
        // highest x first
        return b.x - a.x;

      case CardPosition.RIGHT:
        // lowest x first
        return a.x - b.x;

      case CardPosition.TOP:
        // highest y first
        return b.y - a.y;

      case CardPosition.BOTTOM:
        // lowest y first
        return a.y - b.y;

      default:
        // If we ever have a position that isn't in the map, just preserve the order
        return 0;
    }
  }

  static findNearestCard(card: PredictionCard, predictionCards: PredictionCard[]): PredictionCard | null
  {
    let nearestCard: PredictionCard | null = null;
    let minDistance = Infinity;

    for (const otherCard of predictionCards)
    {
      if (otherCard === card) continue;

      switch (card.position)
      {
        case CardPosition.LEFT:
          if (otherCard.x <= card.x) continue;
          break;
        case CardPosition.RIGHT:
          if (otherCard.x >= card.x) continue;
          break;
        case CardPosition.TOP:
          if (otherCard.y <= card.y) continue;
          break;
        case CardPosition.BOTTOM:
          if (otherCard.y >= card.y) continue;
          break;
      }

      const distanceSquared = Math.pow(card.x - otherCard.x, 2) + Math.pow(card.y - otherCard.y, 2);

      if (distanceSquared < minDistance)
      {
        minDistance = distanceSquared;
        nearestCard = otherCard;
      }
    }

    return nearestCard!;
  }

  static assembleForest(predictionResult: PredictionResult): ForestCard[]
  {
    const forestCards: ForestCard[] = []

    let predictionCards: PredictionCard[] = []

    for (const prediction of predictionResult.predictions)
    {
      const card = cards[prediction.class]

      predictionCards.push({
        ...prediction,
        ...card
      } as PredictionCard)
    }

    predictionCards.sort(ForestAssembler.compareCards);

    let baseIndex = 0
    for (const card of predictionCards)
    {
      if (card.position == CardPosition.BASE)
      {
        card.baseIndex = baseIndex
        baseIndex++;
      }
      else
      {
        const nearestCard = ForestAssembler.findNearestCard(card, predictionCards)
        if (nearestCard === null)
        {
          throw new Error(`No nearest card found for card at position (${card?.x}, ${card?.y})`);
        }
        if (nearestCard.baseIndex === undefined || nearestCard.baseIndex === null)
        {
          throw new Error(`Base index not defined for nearest card at position (${nearestCard?.x}, ${nearestCard?.y})`);
        }
        card.baseIndex = nearestCard.baseIndex;
      }
    }

    for (const card of predictionCards)
    {
      const forestCard: ForestCard = {
        id: card.class,
        color: card.color,
        baseIndex: card.baseIndex,
      };
      forestCards.push(forestCard);
    }

    return forestCards;
  }
}
