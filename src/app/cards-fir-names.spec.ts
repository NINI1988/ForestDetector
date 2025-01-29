import { TestBed } from '@angular/core/testing';
import { Forest } from '../model/forest';
import { cards } from '../model/cards';

describe('ForestScore', () =>
{

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
  });

  it('All my cards should match GlCards', () =>
  {

    const forest = new Forest("", [])
    for (const card of Object.values(cards))
    {
      const glCardName = card.glCardName
      const glCard = forest.findCard(glCardName)

      expect(glCard?.name).toEqual(glCardName);
    }

  });
});
