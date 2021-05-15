import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookupRoutingModule } from './lookup-routing.module';
import { LookupComponent } from './lookup.component';


@NgModule({
  declarations: [
    LookupComponent
  ],
  imports: [
    CommonModule,
    LookupRoutingModule
  ]
})
export class LookupModule { }
