import { Component } from '@angular/core';

@Component({
  selector: 'reactangular-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .header {
        display: flex;
      }
    `
  ]
})
export class AppComponent {
  counter = 0;
  buy(type: CustomEvent) {
    this.counter++;
  }
}
