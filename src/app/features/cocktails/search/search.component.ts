import { AbstractControl, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { SearchType } from './models/search-type.enum';

type SearchTypeConfig = {
  [key in SearchType]: { display: string; };
};;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchType: SearchType = SearchType.FirstLetter;
  // query: string = 'm';
  // query: Observable<string> = of('m');
  query: FormControl = new FormControl();
  cocktails$ =  this.cocktails.search(SearchType.FirstLetter, 'm');
  // cocktails$ =  concatma({cocktails: this.cocktails.search(SearchType.FirstLetter, this.query)});
  cocktailsByName$ =  this.cocktails.search(SearchType.FirstLetter, 'm');
  searchTypes = SearchType;
  searchTypeConfig: SearchTypeConfig = {
    f : {display: 'Cocktail Name'},
    i : {display: 'First Letter'},
    s : {display: 'Ingredient Name'},
  };


  constructor(
    private cocktails: CocktailsService,
  ) { }

  ngOnInit(): void {
    this.query.valueChanges.subscribe((c: string) => {
      console.log('changes', c);
      this.cocktails$ =  this.cocktails.search(SearchType.FirstLetter, c);
    })
  }

}
