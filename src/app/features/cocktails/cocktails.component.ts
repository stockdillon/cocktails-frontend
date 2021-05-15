import { Component, OnInit } from '@angular/core';

interface Route {
  name: string,
  path: string,
}

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {
  routes: Route[] = [
    {
      name: 'Search',
      path: '/cocktails/search'
    },
    {
      name: 'Lookup',
      path: '/cocktails/lookup'
    },    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
