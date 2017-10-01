import { Component } from '@angular/core';
import {Hero} from '../../models/Hero';
import {HeroService} from '../../services/hero.service';
import { HEROES  } from '../../mock-heroes';
import {Observable} from "rxjs/Observable";
import { ActivatedRoute, ParamMap,Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  selectedHero:Hero;
  hero:Hero;
  heroes:Hero[];


  constructor(
    private router: Router,
    private heroService: HeroService,
  ){}
  
  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

  getHeroes():void{
    console.log(HEROES);
     this.heroService.getHeroes().then( a => this.heroes=a);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  ngOnInit():void{
    this.getHeroes();
  }
}