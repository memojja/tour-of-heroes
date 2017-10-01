import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';

import { HeroService } from './services/hero.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
// import {DashboardComponent} from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'dashboard',
        // redirectTo: '/dashboard',
        // pathMatch: 'full'
        component: DashboardComponent,
       
      }, {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
    
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
