import { CockailIdentifier } from '../models/query-indentifiers.const';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Drink } from '../models/cocktail-response.interface';
import { CocktailQueryType } from '../models/cocktail-query-type.enum';
import { CocktailsService } from '../../../../app/services/cocktails.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailResolver implements Resolve<Observable<Drink[]>> {
  constructor(
    private cocktails: CocktailsService
  ) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Drink[]> {
    const id = route.paramMap.get(`${CockailIdentifier.Id}`);
    const name = route.paramMap.get(`${CockailIdentifier.Name}`);
    const firstLetter = route.paramMap.get(`${CockailIdentifier.FirstLetter}`);
    const query = id || name || firstLetter;
    if (id) {
      return this.cocktails.get(CocktailQueryType.Lookup, CockailIdentifier.Id, query).pipe(
        map(res => {
          console.log('id: ', id);
          console.log('ingredients response: ', res);
          return res.drinks;
        })
      );
    } else if (name){
      return this.cocktails.get(CocktailQueryType.Search, CockailIdentifier.Name, query).pipe(
        map(res => {
          console.log('name: ', name);
          console.log('ingredients response: ', res);
          return res.drinks;
        })
      );
    } else if (firstLetter){
      return this.cocktails.get(CocktailQueryType.Search, CockailIdentifier.FirstLetter, query).pipe(
        map(res => {
          console.log('first letter: ', name);
          console.log('ingredients response: ', res);
          return res.drinks;
        })
      );
    } else {
      return undefined;
    }
  }  
}
