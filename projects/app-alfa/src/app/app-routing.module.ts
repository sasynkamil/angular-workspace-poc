import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirspageComponent} from 'projects/app-alfa/src/app/pages/firspage/firspage.component';
import {SecondpageComponent} from 'projects/app-alfa/src/app/pages/secondpage/secondpage.component';

const routes: Routes = [
  {path: 'alfa/firstpage', component: FirspageComponent},
  {path: 'alfa/secondpage', component: SecondpageComponent},
  // {path: 'alfa', redirectTo: 'alfa/firstpage'},
  // {path: '', redirectTo: 'alfa/firstpage', pathMatch: 'full'}, // app-alfa is like Dashboard, always needs to be deployed
  // {path: '**', redirectTo: 'alfa/secondpage'}, // TODO put PageNotFound instead
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
