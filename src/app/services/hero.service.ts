import { Injectable } from '@angular/core';
import { HEROES  } from '../mock-heroes';
import {Hero} from '../models/Hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes():Promise<Hero[]> {
    console.log(HEROES);
    return Promise.resolve(HEROES);
  }
}
