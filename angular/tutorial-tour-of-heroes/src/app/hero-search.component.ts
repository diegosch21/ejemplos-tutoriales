import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  // A Subject is a producer of an observable event stream - A Subject is also an Observable
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    //  searchTerms produces an Observable of strings, the filter criteria for the name search
    //  Each call to search() puts a new string into this subject's observable stream by calling next().
    this.searchTerms.next(term);
  }

  // Initalize the heroes property
  ngOnInit(): void {
    // Turns the stream of search terms into a stream of Hero arrays and assigns the result to the heroes property.
    // Passing every user keystroke directly to the HeroSearchService would create an excessive amount of HTTP requests,
    //    taxing server resources and burning through the cellular network data plan.
    // Instead, you can chain Observable operators that reduce the request flow to the string Observable.
    //    You'll make fewer calls to the HeroSearchService and still get timely results.
    this.heroes = this.searchTerms
      // wait 300ms after each keystroke before considering the term - waits until the flow of new string events pauses for 300 milliseconds
      .debounceTime(300)
      // ignore if next search term is same as previous - ensures that a request is sent only if the filter text changed
      .distinctUntilChanged()
      // calls the search service for each search term - switch to new observable each time the term change
      // It cancels and discards previous search observables, returning only the latest search service observable
      .switchMap(term => term
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Hero[]>([])
      ).catch(error => {
        console.log(error); // TODO: add real error handling
        return Observable.of<Hero[]>([]);
      });

    // switchMap() preserves the original request order while returning only the observable from the most recent http method call.
    //  Results from prior calls are canceled and discarded.
    // If the search text is empty, the http() method call is also short circuited and an observable containing an empty array is returned.
    // Note that until the service supports that feature, canceling the HeroSearchService Observable
    //  doesn't actually abort a pending HTTP request. For now, unwanted results are discarded.
  }

  goToDetail(hero: Hero): void {
    this.router.navigate(['/detail', hero.id]);
  }

}