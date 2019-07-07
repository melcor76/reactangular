import { Component } from '@angular/core';

@Component({
  selector: 'reactangular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buy(type: CustomEvent) {
    console.log(type);
  }
}
