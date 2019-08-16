import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home-movie-page',
  templateUrl: './home-movie-page.component.html',
  styleUrls: ['./home-movie-page.component.scss']
})
export class HomeMoviePageComponent implements OnInit, OnDestroy {
  id:any;
  detailedMovie:any;
  detailedMovieTrailer:string;
  subcription = new Subscription();
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.GetParamsFromURL();
    this.GetDetailedMovie();
  }

  GetParamsFromURL(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  GetDetailedMovie(){
    const url: any = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`;
    this.movieService.GetMovie(url).subscribe(
      (data:any) => {
        this.detailedMovie = data;
        let trailer = this.detailedMovie.Trailer.split('watch?v=');
        this.detailedMovieTrailer = trailer[0] + "embed/" + trailer[1];
      }
    )
  }

  Booking(id){
    this.router.navigate(["/home/booking-page", id]);
  }
  
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
