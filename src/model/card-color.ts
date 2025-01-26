export enum CardColor
{
  NONE = "", // Tree sprout
  LINDEN = "Yellow",
  OAK = "Brown",
  SILVER_FIR = "Blue",
  BIRCH = "LightGreen",
  BEECH = "Green",
  SYCAMORE = "Red",
  DOUGLAS_FIR = "Grey",
  HORSE_CHESTNUT = "Orange",
  LARIX = "Lila",
  PINUS = "Pink"
}

export function cardColorToGlSymbol(cardColor: CardColor): string
{
  const colorMap: Record<CardColor, string> = {
    [CardColor.NONE]: "NONE",
    [CardColor.LINDEN]: "linden",
    [CardColor.OAK]: "oak",
    [CardColor.SILVER_FIR]: "silverFir",
    [CardColor.BIRCH]: "birch",
    [CardColor.BEECH]: "beech",
    [CardColor.SYCAMORE]: "sycamore",
    [CardColor.DOUGLAS_FIR]: "douglasFir",
    [CardColor.HORSE_CHESTNUT]: "horseChestnut",
    [CardColor.LARIX]: "europeanLarch",
    [CardColor.PINUS]: "stonePine",
  }

  return colorMap[cardColor];

}
