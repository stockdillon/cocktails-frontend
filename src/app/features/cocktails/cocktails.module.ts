import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CocktailComponent } from './cocktail/cocktail.component';


@NgModule({
  declarations: [
    CocktailsComponent,
    CocktailComponent,
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [
  ]
})
export class CocktailsModule { }
