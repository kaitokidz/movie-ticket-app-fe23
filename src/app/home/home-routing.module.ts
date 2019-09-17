import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeBookingPageComponent } from './home-booking-page/home-booking-page.component';
import { AuthenticationGuard } from '../_core/guards/authentication.guard';
import { HomeMoviePageComponent } from './home-movie-page/home-movie-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeShowtimesComponent } from './home-page/home-showtimes/home-showtimes.component';
import { HomeCinemasComponent } from './home-page/home-cinemas/home-cinemas.component';
import { HomeNewsComponent } from './home-page/home-news/home-news.component';
import { HomeApplicationComponent } from './home-page/home-application/home-application.component';
import { HomeComponent } from './home.component';
import { LoginActivate } from '../_core/guards/login-activate.guard';


const routes: Routes = [
  { path: "homepage", component: HomePageComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "homepage", component: HomePageComponent },
      { path: "booking-page/:id", component: HomeBookingPageComponent, canActivate: [AuthenticationGuard] },
      { path: "movie-page/:id", component: HomeMoviePageComponent },
      { path: "sign-up", component: SignUpComponent, canActivate: [LoginActivate] },
      { path: "sign-in", component: SignInComponent, canActivate: [LoginActivate] },
      { path: "showtimes", component: HomeShowtimesComponent },
      { path: "cinemas", component: HomeCinemasComponent },
      { path: "news", component: HomeNewsComponent },
      { path: "applications", component: HomeApplicationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

