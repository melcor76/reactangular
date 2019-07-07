import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AddToCartComponent } from './add-to-cart.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [AddToCartComponent, CartComponent],
  entryComponents: [AddToCartComponent, CartComponent]
})
export class ElementsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AddToCartComponent, {
      injector: this.injector
    });

    customElements.define(`add-to-cart-button`, el);

    const el2 = createCustomElement(CartComponent, {
      injector: this.injector
    });

    customElements.define(`shopping-cart`, el2);
  }
}
