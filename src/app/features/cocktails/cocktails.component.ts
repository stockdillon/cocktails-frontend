import { map, tap } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Drink } from './models/cocktail-response.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CockailIdentifier } from './models/query-indentifiers.const';
import { MatSort } from '@angular/material/sort';
import { ColumnConfig, QueryType, QueryTypeConfig } from '../../../app/shared';

export interface CocktailQueryTypeConfig {
  identifier: CockailIdentifier,
}

const defaultQueryConfig: QueryTypeConfig & CocktailQueryTypeConfig = {
  type: QueryType.Search,
  displayText: 'Name',
  query: 'margarita',
  identifier: CockailIdentifier.Name,
};

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
export class CocktailsComponent implements OnInit, AfterViewInit {
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
  queryTypes = QueryType;
  identifiers = CockailIdentifier;
  query: QueryTypeConfig & CocktailQueryTypeConfig = {...defaultQueryConfig};
  queryTypeConfigs: Array<QueryTypeConfig & CocktailQueryTypeConfig> = [
    {...defaultQueryConfig},
    {
      type: QueryType.Search,
      displayText: 'First Letter',
      query: 'm',  
      identifier: CockailIdentifier.FirstLetter,
    },    
    {
      type: QueryType.Lookup,
      displayText: 'ID Lookup',
      query: '11007',
      identifier: CockailIdentifier.Id
    },    
  ];
  expandedElement: Drink | null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  submit(){
    let routeSegments = ['cocktails', this.query.type];
    if(this.query.identifier === CockailIdentifier.FirstLetter){
      routeSegments.push('first')
    }
    routeSegments.push(this.query.query);
    this.router.navigate(routeSegments, {relativeTo: undefined})
  }    

}
