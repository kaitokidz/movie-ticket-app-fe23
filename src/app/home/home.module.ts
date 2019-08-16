import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeManagementComponent } from "./home-management/home-management.component";
import { HomeHeaderComponent } from "./home-management/home-header/home-header.component";
import { HomeFooterComponent } from "./home-management/home-footer/home-footer.component";
import { HomePageComponent } from "./home-management/home-page/home-page.component";
import { HomeMoviePageComponent } from "./home-management/home-movie-page/home-movie-page.component";
import { HomeBookingPageComponent } from "./home-management/home-booking-page/home-booking-page.component";
import { HomeCarouselComponent } from "./home-management/home-page/home-carousel/home-carousel.component";
import { HomeSearchComponent } from "./home-management/home-page/home-search/home-search.component";
import { HomeShowtimesComponent } from "./home-management/home-page/home-showtimes/home-showtimes.component";
import { HomeCinemasComponent } from "./home-management/home-page/home-cinemas/home-cinemas.component";
import { HomeNewsComponent } from "./home-management/home-page/home-news/home-news.component";
import { HomeApplicationComponent } from "./home-management/home-page/home-application/home-application.component";
import { MovieItemComponent } from "./home-management/home-page/home-showtimes/movie-item/movie-item.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ModalComponent } from "../_core/components/modal/modal.component";
import { SafePipe } from "../_core/pipes/safe.pipe";
import { SeatItemComponent } from "./home-management/home-booking-page/seat-item/seat-item.component";
import { SignUpComponent } from "./home-management/sign-up/sign-up.component";
import { SignInComponent } from "./home-management/sign-in/sign-in.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import {OwlCarousel} from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    HomeManagementComponent,
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
    SignInComponent
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [
    HomeManagementComponent,
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
    SignInComponent
  ]
})
export class HomeModule {}
