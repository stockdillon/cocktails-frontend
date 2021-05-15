import { HttpClient } from '@angular/common/http';
import { IngredientsModule } from './ingredients.module';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientResponse } from '../cocktails/search/models/ingredients-response.interface';

@Injectable()
export class IngredientsService {

  constructor(
    private http: HttpClient
  ) { }

  search(name: string): Observable<IngredientResponse> {
    return this.http.get<IngredientResponse>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`);
  }

  lookup(id: string): Observable<IngredientResponse>{
    return this.http.get<IngredientResponse>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`);
  }

}
