import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientResolver } from './resolvers/ingredient.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { IngredientIdentifier } from './models/query-indentifiers.const';

const routes: Routes = [
  { path: '', component: IngredientsComponent, pathMatch: 'full' },
  {
    path: `lookup`,
    component: IngredientsComponent,
    children: [
      {
        path: `:${IngredientIdentifier.Id}`,
        resolve: { ingredient: IngredientResolver },
        component: IngredientComponent,
      },
    ]
  },
  {
    path: `search`,
    component: IngredientsComponent,
    children: [
      {
        path: `:${IngredientIdentifier.Name}`,
        resolve: { ingredient: IngredientResolver },
        component: IngredientComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
