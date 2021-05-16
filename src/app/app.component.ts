import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { State } from './reducers';

interface RouteConfig {
  name: string,
  path: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cocktails-frontend';
  opened: boolean;
  events: string[] = [];
  routes: RouteConfig[] = [
    {
      name: 'Cocktails',
      path: '/cocktails'
    },
    {
      name: 'Ingredients',
      path: '/ingredients'
    },    
  ];

  toggle() {
    this.opened = !this.opened;
  }

  constructor(
    private store: Store<{app: State}>,
  ){ }
  ngOnInit(): void {
    console.log('state: ', this.store);
  }

}
