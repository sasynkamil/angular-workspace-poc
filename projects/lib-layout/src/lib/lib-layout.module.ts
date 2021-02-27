import {NgModule} from '@angular/core';
import {TopbarComponent} from './topbar/topbar.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [TopbarComponent, FooterComponent, MenuComponent],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [TopbarComponent, FooterComponent, MenuComponent],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ]
})
export class LibLayoutModule {
}
