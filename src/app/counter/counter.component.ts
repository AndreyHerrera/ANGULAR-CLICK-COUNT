import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent{

title : string = 'CLICK COUNTER';
middleText : string = 'YOUR COUNT'
buttonText : string = 'CLICK HERE'
count : number = 0;

plusCount(): number{
  return this.count += 1;
}
}


