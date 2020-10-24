import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrontPageComponent} from "./pages/front-page/front-page.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,

  }, {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
