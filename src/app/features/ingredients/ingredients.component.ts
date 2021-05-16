import { IngredientsService } from './ingredients.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientResponse } from './models/ingredients-response.interface';
import { Observable } from 'rxjs';
import { IngredientQueryType } from './models/ingredient-query-type.enum';
import { ActivatedRoute } from '@angular/router';

interface QueryTypeConfig {
  type: IngredientQueryType,
  displayText: string,
  query: string,
}

const defaultQueryConfig: QueryTypeConfig = {
  type: IngredientQueryType.SearchName,
  displayText: 'Search by Name',
  query: 'vodka',  
};

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  queryTypes = IngredientQueryType;
  queryType: IngredientQueryType = IngredientQueryType.SearchName;
  // query: QueryTypeConfig = defaultQueryConfig;
  query: QueryTypeConfig = {...defaultQueryConfig};
  queryTypeConfigs: QueryTypeConfig[] = [
    // {
    //   type: IngredientQueryType.SearchName,
    //   displayText: 'Search by Name',
    //   query: 'alcohol',
    // },
    {...defaultQueryConfig},
    {
      type: IngredientQueryType.LookupId,
      displayText: 'Search by ID',
      query: '552'
    },    
  ];
  // ingredients$: Observable<IngredientResponse> = this.ingredients.search('1');
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
    if(this.query.type === IngredientQueryType.LookupId){
      this.ingredients$ =  this.ingredients.lookup(this.query.query);
    } else if(this.query.type === IngredientQueryType.SearchName){
      this.ingredients$ =  this.ingredients.search(this.query.query);      
    }
  }

}
