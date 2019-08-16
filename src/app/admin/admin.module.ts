import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminManagementComponent } from './admin-management/admin-management.component';

@NgModule({
  declarations: [AdminManagementComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminManagementComponent]
})
export class AdminModule { }
