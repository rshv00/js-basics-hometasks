import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrontPageComponent} from './pages/front-page/front-page.component';

const routes: Routes = [
    {
        path: '',
        component: FrontPageComponent,

    }, {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then(
                (m) => m.HomeModule
            )
    }, {
        path: 'admin',
        loadChildren: () =>
            import('./pages/admin/admin.module').then(
                (m) => m.AdminModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: true,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
