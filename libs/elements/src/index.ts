import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ElementsModule } from './lib/elements.module';

platformBrowserDynamic()
  .bootstrapModule(ElementsModule)
  .catch(err => console.error(err));

//export * from './lib/elements.module';
