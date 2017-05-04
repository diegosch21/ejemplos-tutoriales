import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  // Respuesta asincrónica: retorna Promise, ya que podria obtenerlos de una API
  // A Promise essentially promises to call back when the results are ready.
  // You ask an asynchronous service to do some work and give it a callback function.
  // The service does that work and eventually calls the function with the results or an error.
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // Simula tiempo de espera al obtener lista de Heroes de servidor
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(
        () => resolve(this.getHeroes()),
        2000);
    });
  }
}