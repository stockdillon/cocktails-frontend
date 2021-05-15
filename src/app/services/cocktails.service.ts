import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupType } from '../features/cocktails/lookup/models/lookup-type.enum';
import { SearchType } from '../features/cocktails/search/models/search-type.enum';

enum FeatureType {
  Search = 'search',
  Lookup = 'lookup',
}

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }

  search(type: SearchType, query: string){
    // return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${type}=${query}`);
    return this.get(FeatureType.Search, type, query);
  }

  lookup(type: LookupType, query: string){
    return this.get(FeatureType.Lookup, type, query);
  }

  private get(featureType: FeatureType, type: LookupType | SearchType, query: string) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/${featureType}.php?${type}=${query}`);
  }
}
