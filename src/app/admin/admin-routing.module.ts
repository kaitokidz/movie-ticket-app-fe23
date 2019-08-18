import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminMoviesManagementComponent } from './admin-movies-management/admin-movies-management.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersManagementComponent } from './admin-users-management/admin-users-management.component';

const routes: Routes = [
    { path: "", redirectTo: "admin-dashboard", pathMatch: "full" },
    {
        path: "",
        component: AdminComponent,
        children: [
            { path: "movies-management", component: AdminMoviesManagementComponent },
            { path: "admin-dashboard", component: AdminDashboardComponent },
            { path: "users-management", component: AdminUsersManagementComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

