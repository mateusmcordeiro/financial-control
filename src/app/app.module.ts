import { BrowserModule } from '@angular/platform-browser';
import { NgModule,PLATFORM_ID,Injector, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from 'src/core/header/header.module';
import { FooterModule } from 'src/core/footer/footer.module';
import { DashboardModule } from './dashboard/dashboard.module';

/* um plugin usado no projeto estã dando erro, mas funciona. Então removi os console logs pra nao ficar estourando error. */
function silenceConsoleMethods(injector: Injector) {
  return () => {
    const platformId = injector.get(PLATFORM_ID);
    console.log = console.debug = console.warn = console.error = () => {};
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    DashboardModule
  ],
  providers: [
    /*
    {
      provide: APP_INITIALIZER,
      useFactory: silenceConsoleMethods,
      deps: [Injector],
      multi: true
    }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
