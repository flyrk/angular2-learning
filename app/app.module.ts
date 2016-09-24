import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
@NgModule({
    imports:      [
         BrowserModule,
        FormsModule
    ],
    declarations: [
         AppComponent,
         HeroDetailComponent,
         HeroesComponent
    ],
    providers: [HeroService],   // 告诉angular当创建新的AppComponent组件时也要创建一个新的HeroService实例
    bootstrap: [ AppComponent ]
})
export class AppModule { }
