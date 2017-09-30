import { Component } from '@angular/core';
import {Hero} from './models/Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero:Hero;
  hero:Hero;

  heroes:Hero[]=[
    {id:1,name:'Mehmet'},
    {id:2,name:'Eda'},
    {id:3,name:'Talha'},
    {id:4,name:'Ugur'},
    {id:5,name:'Cansu'},
    {id:6,name:'Eyup'},
    {id:7,name:'Hande'},
   ];
  

  onSelect(hero:Hero){
    this.selectedHero=hero;
  }
  
}
