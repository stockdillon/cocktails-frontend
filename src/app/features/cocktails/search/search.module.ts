import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { CocktailNameSearchResultsComponent } from './cocktail-name-search-results/cocktail-name-search-results.component';
import { FirstLetterSearchResultsComponent } from './first-letter-search-results/first-letter-search-results.component';
import { IngredientNameSearchResultsComponent } from './ingredient-name-search-results/ingredient-name-search-results.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    SearchComponent,
    SearchBoxComponent,
    CocktailNameSearchResultsComponent,
    FirstLetterSearchResultsComponent,
    IngredientNameSearchResultsComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
  ]
})
export class SearchModule { }
