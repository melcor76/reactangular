import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  template: `
    <button (click)="add()">+</button>
  `
})
export class AddToCartComponent {
  @Input() type: string;
  @Output() addToCart = new EventEmitter<string>();

  add() {
    this.addToCart.emit(this.type);
    console.log(this.type);
  }
}
