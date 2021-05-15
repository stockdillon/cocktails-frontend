import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailNameSearchResultsComponent } from './cocktail-name-search-results.component';

describe('CocktailNameSearchResultsComponent', () => {
  let component: CocktailNameSearchResultsComponent;
  let fixture: ComponentFixture<CocktailNameSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailNameSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailNameSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
