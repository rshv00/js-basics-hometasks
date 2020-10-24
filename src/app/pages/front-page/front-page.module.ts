import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class FrontPageModule { }
