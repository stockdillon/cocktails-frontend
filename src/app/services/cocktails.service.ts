import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  }
}
