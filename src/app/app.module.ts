import { IngredientsService } from './features/ingredients/ingredients.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { IngredientResolver } from './features/ingredients/ingredient.resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedModule,
    AngularMaterialModule
  ],
  providers: [
    // IngredientsService,
    IngredientResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
