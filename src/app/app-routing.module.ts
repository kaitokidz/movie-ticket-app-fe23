import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './_core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "home/homepage", pathMatch: "full" },
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
