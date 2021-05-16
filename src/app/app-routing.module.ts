import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cocktails', loadChildren: () => import('./features/cocktails/cocktails.module').then(m => m.CocktailsModule) },
  { path: 'ingredients', loadChildren: () => import('./features/ingredients/ingredients.module').then(m => m.IngredientsModule) },
  { path: '**', redirectTo: 'cocktails' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
