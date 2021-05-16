import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientResponse } from './models/ingredients-response.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from './services/ingredients.service';
import { QueryType, QueryTypeConfig } from '@shared/index';

const defaultQueryConfig: QueryTypeConfig = {
  type: QueryType.Search,
  displayText: 'Search by Name',
  query: 'vodka',  
};

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  queryTypes = QueryType;
  queryType: QueryType = QueryType.Search;
  query: QueryTypeConfig = {...defaultQueryConfig};
  queryTypeConfigs: QueryTypeConfig[] = [
    {...defaultQueryConfig},
    {
      type: QueryType.Lookup,
      displayText: 'Search by ID',
      query: '552'
    },    
  ];
  ingredients$: Observable<IngredientResponse>;
  ingredient: Ingredient;
  constructor(
    private ingredients: IngredientsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {ingredient: Ingredient}) => {
      console.log('data from router: ', data);
      this.ingredient = data.ingredient;
    });
  }

  submit(){
    if(this.query.type === QueryType.Lookup){
      this.ingredients$ =  this.ingredients.lookup(this.query.query);
    } else if(this.query.type === QueryType.Search){
      this.ingredients$ =  this.ingredients.search(this.query.query);      
    }
  }

}
