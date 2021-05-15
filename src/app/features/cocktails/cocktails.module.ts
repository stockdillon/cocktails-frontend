import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    CocktailsComponent
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    MatButtonModule,
    MatListModule,
  ]
})
export class CocktailsModule { }
