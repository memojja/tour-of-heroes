import { Component } from '@angular/core';
import {Hero} from './models/Hero';
import {HeroService} from './services/hero.service';
import { HEROES  } from './mock-heroes';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
 
  

  constructor(){
  }

  
  ngOnInit():void{
  }
}
