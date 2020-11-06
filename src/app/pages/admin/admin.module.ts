import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthComponent} from './admin-auth/admin-auth.component';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin.routing.module';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [AdminAuthComponent, AdminComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        MatButtonModule
    ]
})
export class AdminModule {
}
