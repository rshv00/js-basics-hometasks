import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {AdminAuthComponent} from './admin-auth/admin-auth.component';
import {AdminAuthGuard} from './admin-auth/admin-auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'edit',
        pathMatch: 'full'
    },
    {
        path: 'edit',
        component: AdminComponent,
        canActivate: [AdminAuthGuard]
    }, {
        path: 'auth',
        component: AdminAuthComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
}
