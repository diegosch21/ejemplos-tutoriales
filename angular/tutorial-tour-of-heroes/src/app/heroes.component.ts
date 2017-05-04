import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  // The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent.
  // The AppComponent, as well as its child components, can use that service to get hero data.
  // providers: [HeroService], // definido en AppModule, para usar en toda la app
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css' ]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService // Inject service (definido en providers del module)
  )
  {
    // You might be tempted to call the getHeroes() method in a constructor,
    // but a constructor should not contain complex logic,
    // especially a constructor that calls a server, such as as a data access method.
    // The constructor is for simple initializations, like wiring constructor parameters to properties.
  }

  ngOnInit(): void { // lifecycle hook: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
    // Inicializa heroes (podría obtenerlos de una API, por lo que no debe estar en constructor)
    this.getHeroes();
  }

  getHeroes(): void {
    // Obtengo lista de héroes: Respuesta asincrónica (retorna Promise)
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
