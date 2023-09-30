import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor']
  public deletedHero?: string;

  removeLastHero():void{
     this.deletedHero = this.heroNames.pop();

  }

  constructor() { }

  ngOnInit(): void {
  }


}
