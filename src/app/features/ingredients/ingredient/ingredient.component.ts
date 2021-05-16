import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../models/ingredients-response.interface';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient: Ingredient;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('snapshot data: ', this.route.snapshot.data);
    this.ingredient = this.route.snapshot.data.ingredient;    
  }

}
