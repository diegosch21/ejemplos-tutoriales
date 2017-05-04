import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect route
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // :id is a placeholder for a specific hero id when navigating to the HeroDetailComponent
  { path: 'detail/:id', component: HeroDetailComponent }
];

/** Routing module */
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  // The Routing Module adds RouterModule to exports so that the components in the companion module have access
  // to Router declarables, such as RouterLink and RouterOutlet.
  exports: [ RouterModule ]
  // There are no declarations. Declarations are the responsibility of the companion module
  // If you have guard services, the Routing Module adds module providers
})
export class AppRoutingModule {}
