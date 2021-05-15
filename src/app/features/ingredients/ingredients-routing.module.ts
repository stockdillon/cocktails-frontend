import { IngredientResolver } from './ingredient.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { INGREDIENT_ID_QUERY_IDENTIFIER, INGREDIENT_NAME_QUERY_IDENTIFIER } from './query-indentifiers.const';

const routes: Routes = [
  { path: '', component: IngredientsComponent, pathMatch: 'full'},
  {
    path: `lookup/:${INGREDIENT_ID_QUERY_IDENTIFIER}`,
    resolve: {ingredient: IngredientResolver},
    component: IngredientsComponent,
  },
  {
    path: `search/:${INGREDIENT_NAME_QUERY_IDENTIFIER}`,
    resolve: {ingredient: IngredientResolver},
    component: IngredientsComponent,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
