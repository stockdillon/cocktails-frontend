import { IngredientsService } from './ingredients.service';
import { Component, OnInit } from '@angular/core';
import { IngredientResponse } from '../cocktails/search/models/ingredients-response.interface';
import { Observable } from 'rxjs';
import { IngredientQueryType } from './models/ingredient-query-type.enum';

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
  ingredients$: Observable<IngredientResponse> = this.ingredients.search('1');
  constructor(
    private ingredients: IngredientsService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.queryType === IngredientQueryType.LookupId){
      this.ingredients$ =  this.ingredients.lookup(this.query.query);
    } else if(this.queryType === IngredientQueryType.SearchName){
      this.ingredients$ =  this.ingredients.search(this.query.query);      
    }
  }

}
