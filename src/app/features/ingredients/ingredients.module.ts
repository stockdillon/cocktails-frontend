import { IngredientsService } from './ingredients.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';


@NgModule({
  declarations: [
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ],
  providers: [
    IngredientsService,
  ]
})
export class IngredientsModule { }
