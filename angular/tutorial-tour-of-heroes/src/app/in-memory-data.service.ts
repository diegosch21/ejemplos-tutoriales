import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from './mock-heroes';

// Simula BD de backend para requests a la API, usando InMemotyWebApiModule - https://github.com/angular/in-memory-web-api
export class InMemoryDataService implements InMemoryDbService {
  createDb(): {} {
    let heroes = HEROES;

    return {heroes};
  }
}