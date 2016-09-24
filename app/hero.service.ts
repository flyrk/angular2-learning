import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {  // 承诺事件
        return Promise.resolve(HEROES);
    }
}
