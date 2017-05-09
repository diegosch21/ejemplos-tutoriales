import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  // @Input hero: Hero;
  // El decorator @Input se usa si se incluye el componente dentro de otro, el cual indica el heroe seleccionado:
  //    <hero-detail [hero]="selectedHero"></hero-detail>

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // use the params Observable to extract the id parameter value from the ActivatedRoute service
    // and use the HeroService to fetch the hero with that id.
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
    // The switchMap operator maps the id in the Observable route parameters to a new Observable,
    //  the result of the HeroService.getHero() method.
    // If a user re-navigates to this component while a getHero request is still processing,
    //  switchMap cancels the old request and then calls HeroService.getHero() again.
    // the route parameter value (id) is converted to a number with the JavaScript (+) operator.
  }

  save(): void {
    this.heroService.update(this.hero)
        .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
