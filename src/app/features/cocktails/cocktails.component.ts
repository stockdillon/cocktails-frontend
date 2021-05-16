import { map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CocktailQueryType } from './models/cocktail-query-type.enum';
import { Drink } from './models/cocktail-response.interface';

interface Route {
  name: string,
  path: string,
}

interface QueryTypeConfig {
  type: CocktailQueryType,
  displayText: string,
  query: string,
}

const defaultQueryConfig: QueryTypeConfig = {
  type: CocktailQueryType.Search,
  displayText: 'Search by Name',
  query: 'margarita',  
};


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {
  displayedColumns: string[] = ['strDrink'];
  dataSource = new MatTableDataSource();

  cocktails$: Observable<Drink[]>;
  queryTypes = CocktailQueryType;
  query: QueryTypeConfig = {...defaultQueryConfig};
  queryTypeConfigs: QueryTypeConfig[] = [
    {...defaultQueryConfig},
    {
      type: CocktailQueryType.Search,
      displayText: 'Search by First Letter',
      query: 'm',  
    },    
    {
      type: CocktailQueryType.Lookup,
      displayText: 'Lookup by ID',
      query: '552'
    },    
  ];  

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cocktails$ = this.route.data.pipe(
      map((data: {drinks: Drink[]}) => {
        return data.drinks;
      }),
      tap((drinks: Drink[]) => {
        this.dataSource.data = drinks;
        console.log('data source: ', drinks);
      })
    )
    // this.route.data.subscribe((data: {drinks: Drink[]}) => {
    //   console.log('data from router: ', data);
    //   this.ingredient = data.ingredient;
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

}
