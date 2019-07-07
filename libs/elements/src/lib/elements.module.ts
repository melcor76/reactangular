import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule } from '@angular/material/button';

import { AddToCartComponent } from './add-to-cart.component';

@NgModule({
  imports: [BrowserModule, CommonModule, MatButtonModule],
  declarations: [AddToCartComponent],
  entryComponents: [AddToCartComponent]
})
export class ElementsModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AddToCartComponent, {
      injector: this.injector
    });

    customElements.define(`add-to-cart-button`, el);
  }
}
