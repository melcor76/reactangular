import { Component } from '@angular/core';

@Component({
  selector: 'reactangular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  buy(type: CustomEvent) {
    this.counter++;
  }
}
