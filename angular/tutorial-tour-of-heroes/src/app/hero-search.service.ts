import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

  constructor (private http: Http) {}

  /**
   * Búsqueda de heroes, retorna Observable en lugar de convertirlo a Promise
   * A request-cancel-new-request sequence is difficult to implement with Promises, but easy with Observables.
   * RxJS operator chaining makes response processing easy and readable
   */

  // Hero search feature. As the user types a name into a search box, you'll make repeated HTTP requests for heroes filtered by that name.
  search(term: string): Observable<Hero[]> {
    // url definido por InMemoryWebApi - https://github.com/angular/in-memory-web-api#simple-query-strings
    return this.http.get(`app/heroes/?name=${term}`)
                .map(response => response.json().data as Hero[]); // extract heroes from the response data
  }
}