import { IngredientResolver } from './ingredient.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { IngredientIdentifier } from './models/query-indentifiers.const';

const routes: Routes = [
  { path: '', component: IngredientsComponent, pathMatch: 'full'},
  {
    path: `lookup/:${IngredientIdentifier.Id}`,
    resolve: {ingredient: IngredientResolver},
    component: IngredientsComponent,
  },
  {
    path: `search/:${IngredientIdentifier.Name}`,
    resolve: {ingredient: IngredientResolver},
    component: IngredientsComponent,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
