import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    CocktailsComponent
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
  ],
  providers: [
  ]
})
export class CocktailsModule { }
