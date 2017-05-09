import { Injectable }     from '@angular/core';
import { Http, Headers }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api - No usada ya que se está usando InMemoryWebApiModule
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // Consulta de mock - Simula tiempo de espera al obtener lista de Heroes de servidor
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 1 second delay
      setTimeout(
        () => resolve(this.getHeroes()),
        1000);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /****************************************************************************************************************************************
   * ABM de heroes - Requests simulados a API
   *  InMemoryWebApiModule reemplaza los request de http en consultas al arreglo definido en InMemoryDataService, que simula DB de backend.
   *  Respuestas asincrónicas: Retornan Promises
   *    A Promise essentially promises to call back when the results are ready.
   *    You ask an asynchronous service to do some work and give it a callback function.
   *    The service does that work and eventually calls the function with the results or an error.
   *  Los métodos de http retornan Observable, pero se transforman en Promises
   *    Converting to a Promise is often a good choice. You typically ask http.get() to fetch a single chunk of data.
   *    When you receive the data, you're done. The calling component can easily consume a single result in the form of a Promise.
   */

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES); // Consulta de mock in-memory

    // Consulta de API
    // The Angular http.get returns an RxJS Observable. Observables are a powerful way to manage asynchronous data flows.
    // For now, you've converted the Observable to a Promise using the toPromise operator.
    return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);

  }

  // Obtiene heroe de id indicado
  getHero(id: number): Promise<Hero> {
    // Consulta de mock in-memory - Resuelve el promise retornando el valor obtenido por heroes.find()
    // Filters the heroes list from getHeroes() by id
    // return this.getHeroes()
    //            .then(heroes => heroes.find(hero => hero.id === id));

    // Consulta de API - InMemoryWebApiModule obtiene el elemento del arreglo con el id indicado, y lo wrappea en data
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Hero)
                .catch(this.handleError);
  }

  // Request a API para editar heroe - InMemoryWebApiModule reemplaza el put de http por una actualización al arreglo definido
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
                .toPromise()
                .then(() => hero)
                .catch(this.handleError);
  }

  // Request a API para crear heroe con nombre indicado
  //  InMemoryWebApiModule reemplaza el post de http por una creación al arreglo definido que simula la BD del backend
  //  Retorna hero creado
  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
                .toPromise()
                .then(res => res.json().data as Hero )
                .catch(this.handleError);
  }

  // Request a API para eliminar heroe con id indicado
  //  InMemoryWebApiModule reemplaza el delete de http por una eliminación del heroe con id al arreglo que simula la BD del backend
  detele(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
  }


}
