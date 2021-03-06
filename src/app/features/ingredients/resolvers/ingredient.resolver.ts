import { IngredientsService } from '../services/ingredients.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredients-response.interface';
import { map } from 'rxjs/operators';
import { IngredientIdentifier } from '../models/query-indentifiers.const';
import { QueryType } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class IngredientResolver implements Resolve<Ingredient> {
  constructor(
    private ingredients: IngredientsService,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient> {
    const id = route.paramMap.get(`${IngredientIdentifier.Id}`);
    const name = route.paramMap.get(`${IngredientIdentifier.Name}`);
    if (id) {
      // return this.ingredients.lookup(id).pipe(
      return this.ingredients.get(QueryType.Lookup, IngredientIdentifier.Id, id).pipe(
        map(res => {
          console.log('id: ', id);
          console.log('ingredients response: ', res);
          return res.ingredients?.find(ingredient => ingredient);
        })
      );
    } else if (name){
      // return this.ingredients.search(name).pipe(
        return this.ingredients.get(QueryType.Search, IngredientIdentifier.Name, name).pipe(
        map(res => {
          console.log('name: ', name);
          console.log('ingredients response: ', res);
          return res.ingredients?.find(ingredient => ingredient);
        })
      );
    } else {
      return undefined;
    }
  }
}
