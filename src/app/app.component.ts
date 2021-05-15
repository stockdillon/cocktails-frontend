import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { CocktailsService } from './services/cocktails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cocktails-frontend';
  cocktails$ =  this.cocktails.get();
  constructor(
    private store: Store<{app: State}>,
    private cocktails: CocktailsService,
  ){ }
  ngOnInit(): void {
    console.log('state: ', this.store);
  }

}
