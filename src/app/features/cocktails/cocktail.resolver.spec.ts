import { TestBed } from '@angular/core/testing';

import { CocktailResolver } from './cocktail.resolver';

describe('CocktailResolver', () => {
  let resolver: CocktailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CocktailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
