import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

<button (click)="sumarRestar(1)"> +1 </button>
<button (click)="reset(10)"> Reset</button>
<button (click)="sumarRestar(-1)"> -1 </button>
  `

})
export class CounterComponent{
  public counter: number = 10;

  reset(value:number):void{
    this.counter = value;
  }

  sumarRestar( value: number):void{
    this.counter += value;
  }
}
