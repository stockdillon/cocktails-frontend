import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-name-search-results',
  templateUrl: './cocktail-name-search-results.component.html',
  styleUrls: ['./cocktail-name-search-results.component.scss']
})
export class CocktailNameSearchResultsComponent implements OnInit {
  @Input() results: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
