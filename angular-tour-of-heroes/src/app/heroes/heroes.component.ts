import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
//import { getHashes } from 'crypto';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: "Windstorm", 
  // };

  heroes : Hero[];

  /* selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  } */
  constructor(private heroService: HeroService) {
   }

   /* getHeroes(): void {
     this.heroes = this.heroService.getHeroes();
   } */
   getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  
}
