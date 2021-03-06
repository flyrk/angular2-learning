import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
    selector: 'my-heroes',
    template: `
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <!-- each hero goes here -->
                <span class="badge">{{hero.id}}</span>{{hero.name}}
            </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;const HEROES: Hero[] = [
    { id: 11, name: 'Mr.Perfect' },
    { id: 12, name: 'Barco' },
    { id: 13, name: 'CorCa' },
    { id: 14, name: 'Eric' },
    { id: 15, name: 'Simon' },
    { id: 16, name: 'Karen' },
    { id: 17, name: 'Yuki' },
    { id: 18, name: 'Joker' },
    { id: 19, name: 'Funs' },
    { id: 20, name: 'Mr.Ewin' }
];

        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
    
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {} // 构造函数
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);  // 基于承诺的实现，在承诺事件被解决时再运行
    }

    ngOnInit(): void {    // 生命周期钩子
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
 }
