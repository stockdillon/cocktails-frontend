import { LookupType } from './models/lookup-type.enum';
import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {
  cocktails$ =  this.cocktails.lookup(LookupType.Id, '11007');

  constructor(
    private cocktails: CocktailsService,
  ) { }

  ngOnInit(): void {
  }

}
