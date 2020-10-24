import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminAuthComponent, AdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
