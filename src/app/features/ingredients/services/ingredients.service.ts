import { IngredientIdentifier } from '../models/query-indentifiers.const';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientResponse } from '../models/ingredients-response.interface';
import { QueryType } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
    private http: HttpClient
  ) { }

  get(queryType: QueryType, identifier: IngredientIdentifier, query: string): Observable<IngredientResponse> {
    return this.http.get<IngredientResponse>(`https://www.thecocktaildb.com/api/json/v1/1/${queryType}.php?${identifier}=${query}`);
  }  

}
