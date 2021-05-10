import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HtwooangularspfxWebPartComponent } from './htwooangularspfx-web-part/htwooangularspfx-web-part.component';

@NgModule({
  declarations: [
    HtwooangularspfxWebPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HtwooangularspfxWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(HtwooangularspfxWebPartComponent, { injector: this.injector });
    customElements.define('app-htwooangularspfx-web-part', el);
  }
}
