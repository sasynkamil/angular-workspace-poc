import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LibLayoutModule} from 'projects/lib-layout/src/lib/lib-layout.module';
import { FirspageComponent } from './pages/firspage/firspage.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirspageComponent,
    SecondpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, LibLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
