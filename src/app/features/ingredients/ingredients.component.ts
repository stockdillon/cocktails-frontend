import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientResponse } from './models/ingredients-response.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientsService } from './services/ingredients.service';
import { QueryType, QueryTypeConfig } from '@shared/index';
import { IngredientIdentifier } from './models/query-indentifiers.const';
import { tap } from 'rxjs/operators';

export interface IngredientQueryTypeConfig {
  identifier: IngredientIdentifier,
}

const defaultQueryConfig: QueryTypeConfig & IngredientQueryTypeConfig = {
  type: QueryType.Search,
  displayText: 'Search by Name',
  query: 'vodka',
  identifier: IngredientIdentifier.Name
};

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  queryTypes = QueryType;
  queryType: QueryType = QueryType.Search;
  query: QueryTypeConfig & IngredientQueryTypeConfig = {...defaultQueryConfig};
  queryTypeConfigs: Array<QueryTypeConfig & IngredientQueryTypeConfig> = [
    {...defaultQueryConfig},
    {
      type: QueryType.Lookup,
      displayText: 'Search by ID',
      query: '552',
      identifier: IngredientIdentifier.Id,
    },    
  ];
  ingredients$: Observable<IngredientResponse>;
  ingredient: Ingredient;
  constructor(
    private ingredients: IngredientsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('snapshot data: ', this.route.snapshot.data);
    this.route.data.subscribe((data: {ingredient: Ingredient}) => {
      console.log('data from router: ', data);
      this.ingredient = {...data.ingredient};
    });
  }

  submit(){
    const routeSegments = ['ingredients', this.query.type, this.query.query];
    this.router.navigate(routeSegments, {relativeTo: undefined, skipLocationChange: true})
    // this.ingredients$ = this.ingredients.get(this.query.type, this.query.identifier, this.query.query).pipe(
    //   tap((data: IngredientResponse) => {
    //     this.ingredient = data.ingredients.find((ingr, index) => index === 0);
    //   }),
    // );
  }  

  emitQuery(event: Event){
    console.log('event:', event);
  }  
}
