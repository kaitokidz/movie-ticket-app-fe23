import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBookingPageComponent } from './home-management/home-booking-page/home-booking-page.component';
import { HomePageComponent } from './home-management/home-page/home-page.component';
import { HomeMoviePageComponent } from './home-management/home-movie-page/home-movie-page.component';
import { SignUpComponent } from './home-management/sign-up/sign-up.component';
import { SignInComponent } from './home-management/sign-in/sign-in.component';
import { AuthenticationGuard } from '../_core/guards/authentication.guard';
import { HomeShowtimesComponent } from './home-management/home-page/home-showtimes/home-showtimes.component';
import { HomeCinemasComponent } from './home-management/home-page/home-cinemas/home-cinemas.component';
import { HomeNewsComponent } from './home-management/home-page/home-news/home-news.component';
import { HomeApplicationComponent } from './home-management/home-page/home-application/home-application.component';


const routes: Routes = [
    {path: "home-page", component: HomePageComponent },
    {path: "booking-page/:id", component: HomeBookingPageComponent, canActivate:[AuthenticationGuard] },
    {path: "movie-page/:id", component: HomeMoviePageComponent },
    {path: "sign-up", component: SignUpComponent },
    {path: "sign-in", component: SignInComponent },
    {path: "showtimes", component: HomeShowtimesComponent },
    {path: "cinemas", component: HomeCinemasComponent },
    {path: "news", component: HomeNewsComponent },
    {path: "applications", component: HomeApplicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

