import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  // The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent.
  // The AppComponent, as well as its child components, can use that service to get hero data.
  providers: [HeroService],
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)" >
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {  // Inject the HeroService (definido en providers)
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
}
