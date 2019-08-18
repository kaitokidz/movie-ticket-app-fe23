import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminMoviesManagementComponent } from './admin-movies-management/admin-movies-management.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersManagementComponent } from './admin-users-management/admin-users-management.component';
import { AdminMovieModalComponent } from './admin-movies-management/admin-movie-modal/admin-movie-modal.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLayoutComponent,
    AdminMoviesManagementComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    AdminUsersManagementComponent,
    AdminMovieModalComponent,

  ],
  imports: [
    CommonModule, AdminRoutingModule, FormsModule, NgxPaginationModule
  ],
  exports: [
    AdminComponent,
    AdminLayoutComponent,
    AdminMoviesManagementComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    AdminUsersManagementComponent
  ],
})
export class AdminModule { }
