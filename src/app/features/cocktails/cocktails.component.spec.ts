import { QueryType } from '../../shared';
import { mockRoute } from './../../testing/mocks/route.mock';
import { mockRouter } from './../../testing/mocks/router.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { CocktailsComponent } from './cocktails.component';
import { CockailIdentifier } from './models/query-indentifiers.const';

describe('CocktailsComponent', () => {
  let component: CocktailsComponent;
  let fixture: ComponentFixture<CocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: mockRoute},
        {provide: Router, useValue: mockRouter},
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsComponent);
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
        identifier: CockailIdentifier.Name,
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
      expect(navigateSpy).toHaveBeenCalledWith(['cocktails', QueryType.Search, mockQuery.query], mockExtras);
    });
  })  

  describe('applyFilter', () => {
    it('should update the filter string of the datasource', () => {
      const mockEvent = {
        target: {
          value: 'TEST'
        }
      };
      component.applyFilter(mockEvent as any as Event);
      expect(component.dataSource.filter).toEqual('test');
    });
  })    
});
