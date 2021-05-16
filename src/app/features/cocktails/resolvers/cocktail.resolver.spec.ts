import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CocktailResolver } from './cocktail.resolver';

describe('CocktailResolver', () => {
  let resolver: CocktailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    resolver = TestBed.inject(CocktailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
