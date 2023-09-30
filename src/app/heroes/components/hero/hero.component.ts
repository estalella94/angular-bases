import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string{
    return  this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Thor'

  }

  changeAge():void{
    this.age = 33
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

  constructor() { }

  ngOnInit(): void {
  }





}
