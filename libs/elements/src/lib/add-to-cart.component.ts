import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  template: `
    <button (click)="add()">ADD TO CART</button>
  `
})
export class AddToCartComponent {
  @Input() type: string;
  @Output() addToCart = new EventEmitter<string>();

  add() {
    this.addToCart.emit(this.type);
  }
}
