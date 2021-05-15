import { IngredientsService } from './ingredients.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../cocktails/search/models/ingredients-response.interface';
import { map } from 'rxjs/operators';
import { INGREDIENT_ID_QUERY_IDENTIFIER } from './query-indentifiers.const';

@Injectable()
export class IngredientResolver implements Resolve<Ingredient> {
  constructor(
    private ingredients: IngredientsService,
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient> {
    const guid = route.paramMap.get(`${INGREDIENT_ID_QUERY_IDENTIFIER}`);
    return this.ingredients.lookup(guid).pipe(
      map(res => {
        console.log('guid: ', guid);
        console.log('ingredients response: ', res);
        return res.ingredients?.find(ingredient => ingredient);
      })
    );
  }
}
