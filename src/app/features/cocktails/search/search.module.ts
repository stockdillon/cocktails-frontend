import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    SearchComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,

  ]
})
export class SearchModule { }
