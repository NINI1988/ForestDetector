declare module "@/model/Forest" {

  export interface CardParam
  {
    name: string;
    value: number;
    unrestricted?: boolean;
  }

  export interface Card
  {
    name: string;
    count: number;
    points: number;
    params?: CardParam[];
    symbols?: string[];
    position?: 'top' | 'bottom' | 'side';
    recalculatePoints?: (forest: Forest) => void;
  }

  export class Forest
  {
    distributedScoring: boolean;
    playerName: string;
    allForests: Forest[];
    butterflyPoints: number;
    silverFirCount: number;
    lindenCount: number;
    horseChestnutCount: number;
    birchCount: number;
    beechCount: number;
    sycamoreCount: number;
    douglasFirCount: number;
    oakCount: number;
    europeanLarchCount: number;
    stonePineCount: number;
    caveCount: number;
    points: number;
    cards: Card[];

    [key: string]: any; // all params

    constructor(playerName: string, allForests: Forest[]);

    reset(): void;
    getSymbolCount(symbol: string): number;
    setSymbolCount(symbol: string, count: number): void;
    findCard(cardName: string): Card;
    addCard(cardName: string): void;
    removeCard(cardName: string): void;
    addParam(cardName: string, paramName: string): void;
    subParam(cardName: string, paramName: string): void;
    toggleParam(cardName: string, paramName: string): void;
    updatePoints(): void;
    countByName(cardName: string): number;
    countBySymbol(symbolName: string): number;
    countTreesIncludingVioletCarpenterBee(): number;
    countByPosition(position: 'top' | 'bottom' | 'side'): number;
    countDistinctBySymbol(symbolName: string): number;
    hasMostOfName(cardName: string): boolean;
    hasMostOfSymbol(symbolName: string): boolean;
    hasMostTrees(): boolean;
    treeCount(): number;
    treeCardsCount(): number;
    topCount(): number;
    bottomCount(): number;
    sideCount(): number;
    treePoints(): number;
    bottomPoints(): number;
    topPoints(): number;
    sidePoints(): number;
  }

}
