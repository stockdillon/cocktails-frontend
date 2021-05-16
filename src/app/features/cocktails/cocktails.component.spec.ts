import { mockRoute } from './../../testing/mocks/route.mock';
import { mockRouter } from './../../testing/mocks/router.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { CocktailsComponent } from './cocktails.component';

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
});
