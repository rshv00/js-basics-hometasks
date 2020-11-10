import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FrontPageModule} from './pages/front-page/front-page.module';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './pages/admin/admin.module';
import {HomeModule} from './pages/home/home.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FrontPageModule,
        SharedModule,
        AdminModule,
        HomeModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        StoreDevtoolsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
