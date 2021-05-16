import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { IngredientsService } from './services/ingredients.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    IngredientsService,
    HttpClient,
    // IngredientsModule,
  ]
})
export class IngredientsModule { }
