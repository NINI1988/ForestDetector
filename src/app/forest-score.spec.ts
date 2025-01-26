import { TestBed } from '@angular/core/testing';
import { Forest } from '../model/forest';

describe('ForestScore', () =>
{

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
  });

  it('should calculate the score of 238 points', () =>
  {

    const forestCards = [
      {
        id: "Buche",
        color: "Green",
        baseIndex: 0,
      },
      {
        id: "Linde",
        color: "Yellow",
        baseIndex: 1,
      },
      {
        id: "Birke",
        color: "LightGreen",
        baseIndex: 2,
      },
      {
        id: "Buche",
        color: "Green",
        baseIndex: 3,
      },
      {
        id: "Linde",
        color: "Yellow",
        baseIndex: 4,
      },
      {
        id: "Buche",
        color: "Green",
        baseIndex: 5,
      },
      {
        id: "Buche",
        color: "Green",
        baseIndex: 6,
      },
      {
        id: "Birke",
        color: "LightGreen",
        baseIndex: 7,
      },
      {
        id: "Feldhase_Left_LightGreen",
        color: "LightGreen",
        baseIndex: 7,
      },
      {
        id: "Feldhase_Left_Green",
        color: "Green",
        baseIndex: 1,
      },
      {
        id: "Feldhase_Left_Brown",
        color: "Brown",
        baseIndex: 7,
      },
      {
        id: "Waschbaer_Left_Blue",
        color: "Blue",
        baseIndex: 4,
      },
      {
        id: "Feldhase_Left_Yellow",
        color: "Yellow",
        baseIndex: 0,
      },
      {
        id: "Steinmarder_Left_Green",
        color: "Green",
        baseIndex: 6,
      },
      {
        id: "Steinmarder_Left_Red",
        color: "Red",
        baseIndex: 2,
      },
      {
        id: "Braunbaer_Right_Green",
        color: "Green",
        baseIndex: 5,
      },
      {
        id: "Feldhase_Right_Blue",
        color: "Blue",
        baseIndex: 2,
      },
      {
        id: "Feldhase_Right_LightGreen",
        color: "LightGreen",
        baseIndex: 6,
      },
      {
        id: "Steinmarder_Right_Orange",
        color: "Orange",
        baseIndex: 0,
      },
      {
        id: "Feldhase_Right_Red",
        color: "Red",
        baseIndex: 4,
      },
      {
        id: "Feldhase_Right_Red",
        color: "Red",
        baseIndex: 1,
      },
      {
        id: "Fuchs_Right_Brown",
        color: "Brown",
        baseIndex: 7,
      },
      {
        id: "Waldkauz_Green",
        color: "Green",
        baseIndex: 7,
      },
      {
        id: "Schillerfalter_Yellow",
        color: "Yellow",
        baseIndex: 4,
      },
      {
        id: "Kaisermantel_Brown",
        color: "Brown",
        baseIndex: 2,
      },
      {
        id: "Trauermantel_Red",
        color: "Red",
        baseIndex: 1,
      },
      {
        id: "Tagpfauenauge_Orange",
        color: "Orange",
        baseIndex: 0,
      },
      {
        id: "Parasol_Orange",
        color: "Orange",
        baseIndex: 0,
      },
      {
        id: "Igel_Green",
        color: "Green",
        baseIndex: 1,
      },
      {
        id: "Waldameise_Green",
        color: "Green",
        baseIndex: 2,
      },
      {
        id: "Erdkroete_Red",
        color: "Red",
        baseIndex: 4,
      },
      {
        id: "Erdkroete_Grey",
        color: "Grey",
        baseIndex: 4,
      },
      {
        id: "Igel_Orange",
        color: "Orange",
        baseIndex: 7,
      },
    ]

    const allForests: Forest[] = []
    const forest = new Forest("Player1", allForests)
    allForests.push(forest)

    forest.setCards(forestCards)
    forest.caveCount = 0

    forest.updatePoints()

    const points = forest.points

    expect(points).toEqual(238);

  });

  it('should calculate the score of 161 points', () =>
  {

    const forestCards = [
      {
        id: "Kastanie",
        color: "Orange",
        baseIndex: 0,
      },
      {
        id: "Birke",
        color: "LightGreen",
        baseIndex: 1,
      },
      {
        id: "Ahorn",
        color: "Red",
        baseIndex: 2,
      },
      {
        id: "Birke",
        color: "LightGreen",
        baseIndex: 3,
      },
      {
        id: "Kastanie",
        color: "Orange",
        baseIndex: 4,
      },
      {
        id: "Eiche",
        color: "Brown",
        baseIndex: 5,
      },
      {
        id: "Linde",
        color: "Yellow",
        baseIndex: 6,
      },
      {
        id: "Kastanie",
        color: "Orange",
        baseIndex: 7,
      },
      {
        id: "Tanne",
        color: "Blue",
        baseIndex: 8,
      },
      {
        id: "Linde",
        color: "Yellow",
        baseIndex: 9,
      },
      {
        id: "Linde",
        color: "Yellow",
        baseIndex: 10,
      },
      {
        id: "Birke",
        color: "LightGreen",
        baseIndex: 11,
      },
      {
        id: "Kastanie",
        color: "Orange",
        baseIndex: 12,
      },
      {
        id: "Kastanie",
        color: "Orange",
        baseIndex: 13,
      },
      {
        id: "Luchs_Left_Orange",
        color: "Orange",
        baseIndex: 8,
      },
      {
        id: "Frischling_Left_Brown",
        color: "Brown",
        baseIndex: 2,
      },
      {
        id: "Holzbiene_Left_Grey",
        color: "Grey",
        baseIndex: 7,
      },
      {
        id: "Holzbiene_Right_Grey",
        color: "Grey",
        baseIndex: 7,
      },
      {
        id: "Wildschwein_Right_Brown",
        color: "Brown",
        baseIndex: 8,
      },
      {
        id: "Trauermantel_Red",
        color: "Red",
        baseIndex: 7,
      },
      {
        id: "Buntspecht_Yellow",
        color: "Yellow",
        baseIndex: 8,
      },
      {
        id: "Tagpfauenauge_Yellow",
        color: "Yellow",
        baseIndex: 6,
      },
      {
        id: "Eichhoernchen_Grey",
        color: "Grey",
        baseIndex: 5,
      },
      {
        id: "Buntspecht_Yellow",
        color: "Yellow",
        baseIndex: 1,
      },
      {
        id: "Groser-Fuchs_Red",
        color: "Red",
        baseIndex: 2,
      },
      {
        id: "Kaisermantel_Brown",
        color: "Brown",
        baseIndex: 0,
      },
      {
        id: "Moos_Yellow",
        color: "Yellow",
        baseIndex: 3,
      },
      {
        id: "Moos_Grey",
        color: "Grey",
        baseIndex: 8,
      },
      {
        id: "Moos_Yellow",
        color: "Yellow",
        baseIndex: 7,
      },
    ]

    const allForests: Forest[] = []
    const forest = new Forest("Player1", allForests)
    allForests.push(forest)

    forest.setCards(forestCards)
    forest.caveCount = 0

    forest.updatePoints()

    const points = forest.points

    expect(points).toEqual(161);

  });
});
