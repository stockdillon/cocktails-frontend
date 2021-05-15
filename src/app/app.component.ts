import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cocktails-frontend';
  constructor(
    private store: Store<{app: State}>,
  ){ }
  ngOnInit(): void {
    console.log('state: ', this.store);
  }

}
