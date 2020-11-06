import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAuthComponent} from './admin-auth/admin-auth.component';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [AdminAuthComponent, AdminComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class AdminModule {
}
