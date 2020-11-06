import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HomeRoutingModule} from './home.routing.module';


@NgModule({
    declarations: [HomeComponent],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        HomeRoutingModule,
    ]
})
export class HomeModule {
}
