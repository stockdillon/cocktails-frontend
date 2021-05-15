import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { SearchType } from './models/search-type.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cocktails$ =  this.cocktails.search(SearchType.FirstLetter, 'm');

  constructor(
    private cocktails: CocktailsService,
  ) { }

  ngOnInit(): void {
  }

}
