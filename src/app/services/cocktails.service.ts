import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailQueryType } from '../features/cocktails/models/cocktail-query-type.enum';
import { CocktailResponse } from '../features/cocktails/models/cocktail-response.interface';
import { CockailIdentifier } from '../features/cocktails/models/query-indentifiers.const';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  get(queryType: CocktailQueryType, identifier: CockailIdentifier, query: string): Observable<CocktailResponse> {
    return this.http.get<CocktailResponse>(`https://www.thecocktaildb.com/api/json/v1/1/${queryType}.php?${identifier}=${query}`);
  }
}
