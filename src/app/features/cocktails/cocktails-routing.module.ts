import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsComponent } from './cocktails.component';

const routes: Routes = [
  { path: 'lookup', loadChildren: () => import('./lookup/lookup.module').then(m => m.LookupModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },  
  { path: '', component: CocktailsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailsRoutingModule { }
