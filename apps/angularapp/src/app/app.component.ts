import { Component } from '@angular/core';
import '@reactangular/elements';

@Component({
  selector: 'reactangular-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .flex-row {
        display: flex;
        align-items: center;
      }
      table {
        border-collapse: collapse;
        margin-bottom: 5px;
      }

      table,
      th,
      td {
        border: 1px solid black;
        padding: 3px;
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
