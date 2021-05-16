import { CocktailResolver } from './cocktail.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails.component';
import { CockailIdentifier } from './models/query-indentifiers.const';

const routes: Routes = [
  { path: '', component: CocktailsComponent, pathMatch: 'full' },
  {
    path: `lookup/:${CockailIdentifier.Id}`,
    resolve: {drinks: CocktailResolver},
    component: CocktailsComponent,
  },
  {
    path: `search/:${CockailIdentifier.Name}`,
    resolve: {drinks: CocktailResolver},
    component: CocktailsComponent,
  },    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailsRoutingModule { }
