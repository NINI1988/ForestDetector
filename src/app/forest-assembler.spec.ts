import { TestBed } from '@angular/core/testing';
import { ForestAssembler } from '../model/forest-assembler';
import * as predictionResult from '../../test_data/responses/232Points.json';

describe('ForestAssembler', () =>
{

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
  });

  it('should load 232Points.json and validate output of assembleForest', () =>
  {

    const forest = ForestAssembler.assembleForest(predictionResult);

    const expectedCards = [
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

    expect(forest.getCards()).toEqual(expectedCards);

  });
});
