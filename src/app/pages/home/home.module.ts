import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HomeRoutingModule} from './home.routing.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {homeFeatureKey, homePageReducer} from './+state/home.reducer';
import {HomeEffects} from './+state/home.effects';

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
        MatProgressBarModule,
        StoreModule.forFeature(homeFeatureKey, homePageReducer),
        EffectsModule.forFeature([HomeEffects])
    ]
})
export class HomeModule {
}
