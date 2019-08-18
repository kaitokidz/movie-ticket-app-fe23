import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeMoviePageComponent } from './home-movie-page/home-movie-page.component';
import { HomeBookingPageComponent } from './home-booking-page/home-booking-page.component';
import { HomeCarouselComponent } from './home-page/home-carousel/home-carousel.component';
import { HomeSearchComponent } from './home-page/home-search/home-search.component';
import { HomeShowtimesComponent } from './home-page/home-showtimes/home-showtimes.component';
import { HomeCinemasComponent } from './home-page/home-cinemas/home-cinemas.component';
import { HomeNewsComponent } from './home-page/home-news/home-news.component';
import { HomeApplicationComponent } from './home-page/home-application/home-application.component';
import { MovieItemComponent } from './home-page/home-showtimes/movie-item/movie-item.component';
import { ModalComponent } from '../_core/components/modal/modal.component';
import { SafePipe } from '../_core/pipes/safe.pipe';
import { SeatItemComponent } from './home-booking-page/seat-item/seat-item.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeRoutingModule } from './home-routing.module';

// import {OwlCarousel} from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    HomePageComponent,
    HomeMoviePageComponent,
    HomeBookingPageComponent,
    HomeCarouselComponent,
    HomeSearchComponent,
    HomeShowtimesComponent,
    HomeCinemasComponent,
    HomeNewsComponent,
    HomeApplicationComponent,
    MovieItemComponent,
    ModalComponent,
    SafePipe,
    SeatItemComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [
    HomeHeaderComponent,
    HomeFooterComponent,
    HomePageComponent,
    HomeMoviePageComponent,
    HomeBookingPageComponent,
    HomeCarouselComponent,
    HomeSearchComponent,
    HomeShowtimesComponent,
    HomeCinemasComponent,
    HomeNewsComponent,
    HomeApplicationComponent,
    MovieItemComponent,
    ModalComponent,
    SafePipe,
    SeatItemComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent
  ]
})
export class HomeModule { }
