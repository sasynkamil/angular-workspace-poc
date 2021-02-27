import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirspageComponent} from 'projects/app-beta/src/app/pages/firspage/firspage.component';
import {SecondpageComponent} from 'projects/app-beta/src/app/pages/secondpage/secondpage.component';

const routes: Routes = [
  {path: 'beta/firstpage', component: FirspageComponent},
  {path: 'beta/secondpage', component: SecondpageComponent},
  // {path: 'beta', redirectTo: 'beta/firstpage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
