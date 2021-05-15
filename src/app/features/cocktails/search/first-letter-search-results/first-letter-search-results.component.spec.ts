import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLetterSearchResultsComponent } from './first-letter-search-results.component';

describe('FirstLetterSearchResultsComponent', () => {
  let component: FirstLetterSearchResultsComponent;
  let fixture: ComponentFixture<FirstLetterSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLetterSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLetterSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
