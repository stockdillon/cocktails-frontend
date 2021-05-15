import { IngredientsService } from './ingredients.service';
import { Component, OnInit } from '@angular/core';
import { IngredientResponse } from '../cocktails/search/models/ingredients-response.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  ingredients$: Observable<IngredientResponse> = this.ingredients.search('1');
  constructor(
    private ingredients: IngredientsService
  ) { }

  ngOnInit(): void {
  }

}
