import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }     from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService }    from './hero.service';

// Imports for loading & configuring the in-memory web api
// https://github.com/angular/in-memory-web-api
// Rather than require a real API server, this example simulates communication with the remote server
//  by adding the InMemoryWebApiModule to the module imports,
//  effectively replacing the Http client's XHR backend service with an in-memory alternative.
//  By default this service adds a 500ms delay
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    // the forRoot method initializes the in-memory web API with the seed data from the mock hero dataset.
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }
