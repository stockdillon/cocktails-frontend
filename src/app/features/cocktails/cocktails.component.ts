import { map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CocktailQueryType } from './models/cocktail-query-type.enum';
import { Drink } from './models/cocktail-response.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

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

interface ColumnConfig {
  display: string,
  visible: boolean,
  name: string,
}


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],  
})
export class CocktailsComponent implements OnInit {
  // displayedColumns: string[] = ['strDrink', 'idDrink', 'strCategory'];
  displayedColumns: string[];
  columnConfigs: ColumnConfig[] = [
    {
      name: 'strDrink',
      display: 'Name',
      visible: true,
    },
    {
      name: 'idDrink',
      display: 'ID',
      visible: true,
    },
    {
      name: 'strCategory',
      display: 'Category',
      visible: true,
    },        
    {
      name: 'strIngredient1',
      display: 'Ingredient 1',
      visible: true,
    },        
  ]
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
      query: '11007'
    },    
  ];
  expandedElement: Drink | null;

  constructor(
    private route: ActivatedRoute,
  ) { 
    this.cocktails$ = this.route.data.pipe(
      map((data: {drinks: Drink[]}) => {
        return data.drinks;
      }),
      tap((drinks: Drink[]) => {
        this.dataSource.data = drinks;
        console.log('data source: ', drinks);
      })
    )    
    this.displayedColumns = this.columnConfigs.map(c => c.name);
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

}
