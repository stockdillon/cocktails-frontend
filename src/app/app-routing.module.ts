import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'lookup', loadChildren: () => import('./features/lookup/lookup.module').then(m => m.LookupModule) },
  // { path: 'search', loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule) },
  { path: 'cocktails', loadChildren: () => import('./features/cocktails/cocktails.module').then(m => m.CocktailsModule) },
  { path: 'ingredients', loadChildren: () => import('./features/ingredients/ingredients.module').then(m => m.IngredientsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
