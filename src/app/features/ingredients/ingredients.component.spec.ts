import { mockRouter } from './../../testing/mocks/router.mock';
import { mockRoute } from './../../testing/mocks/route.mock';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsComponent } from './ingredients.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IngredientIdentifier } from './models/query-indentifiers.const';
import { QueryType } from '../../shared';

describe('IngredientsComponent', () => {
  let component: IngredientsComponent;
  let fixture: ComponentFixture<IngredientsComponent>;
  let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientsComponent],
      imports: [],
      providers: [
        provideMockStore({initialState}),
        {provide: ActivatedRoute, useValue: mockRoute},
        {provide: Router, useValue: mockRouter},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submit', () => {
    it('should call router.navigate', () => {
      const navigateSpy = spyOn(mockRouter, 'navigate').and.stub();
      const mockQuery = {
        displayText: '',
        identifier: IngredientIdentifier.Name,
        query: 'vodka',
        type: QueryType.Search
      };
      const mockExtras: NavigationExtras = {
        relativeTo: undefined,
      };      
      component.query = mockQuery;
      component.submit();
      expect(navigateSpy).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalledTimes(1);
      expect(navigateSpy).toHaveBeenCalledWith(['ingredients', QueryType.Search, mockQuery.query], mockExtras);
    });
  })
});
