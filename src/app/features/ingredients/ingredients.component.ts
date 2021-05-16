import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientResponse } from './models/ingredients-response.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { QueryType, QueryTypeConfig } from '@shared/index';
import { IngredientIdentifier } from './models/query-indentifiers.const';

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
  query: QueryTypeConfig & IngredientQueryTypeConfig = { ...defaultQueryConfig };
  queryTypeConfigs: Array<QueryTypeConfig & IngredientQueryTypeConfig> = [
    { ...defaultQueryConfig },
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
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const routeSegments = ['ingredients', this.query.type, this.query.query];
    this.router.navigate(routeSegments, {relativeTo: undefined});
  }
}
