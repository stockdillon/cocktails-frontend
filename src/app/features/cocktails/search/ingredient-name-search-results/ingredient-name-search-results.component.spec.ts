import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientNameSearchResultsComponent } from './ingredient-name-search-results.component';

describe('IngredientNameSearchResultsComponent', () => {
  let component: IngredientNameSearchResultsComponent;
  let fixture: ComponentFixture<IngredientNameSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientNameSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientNameSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
