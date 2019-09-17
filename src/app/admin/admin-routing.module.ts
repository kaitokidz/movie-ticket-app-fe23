import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminMoviesManagementComponent } from './admin-movies-management/admin-movies-management.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersManagementComponent } from './admin-users-management/admin-users-management.component';
import { AuthenticationGuard } from '../_core/guards/authentication.guard';

const routes: Routes = [
    { path: "", redirectTo: "admin-dashboard", pathMatch: "full", canActivate: [AuthenticationGuard] },
    {
        path: "",
        component: AdminComponent,
        children: [
            { path: "movies-management", component: AdminMoviesManagementComponent, canActivate: [AuthenticationGuard] },
            { path: "admin-dashboard", component: AdminDashboardComponent, canActivate: [AuthenticationGuard] },
            { path: "users-management", component: AdminUsersManagementComponent, canActivate: [AuthenticationGuard] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

