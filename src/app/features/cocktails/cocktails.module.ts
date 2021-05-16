import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';


@NgModule({
  declarations: [
    CocktailsComponent,
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
