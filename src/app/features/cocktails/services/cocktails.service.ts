import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryType } from '@shared';
import { Observable } from 'rxjs';
import { CocktailResponse } from '../models/cocktail-response.interface';
import { CockailIdentifier } from '../models/query-indentifiers.const';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  get(queryType: QueryType, identifier: CockailIdentifier, query: string): Observable<CocktailResponse> {
    return this.http.get<CocktailResponse>(`https://www.thecocktaildb.com/api/json/v1/1/${queryType}.php?${identifier}=${query}`);
  }
}
