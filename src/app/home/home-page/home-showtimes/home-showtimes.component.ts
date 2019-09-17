import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked } from "@angular/core";
import { MovieService } from "src/app/_core/services/movie.service";
import { TransferService } from "src/app/_core/services/transfer.service";
import { Subscription } from "rxjs";


@Component({
  selector: "app-home-showtimes",
  templateUrl: "./home-showtimes.component.html",
  styleUrls: ["./home-showtimes.component.scss"]
})
export class HomeShowtimesComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
  status: boolean = true;
  movieList: any = [];
  comingSoon: any = [];

  subcription = new Subscription();
  subcription2 = new Subscription();

  constructor(
    private movieService: MovieService,
    private transferService: TransferService
  ) { }

  ngOnInit() {
    this.GetMovieList();

  }

  ChangeStatus() {
    this.status = !this.status;
  }

  GetMovieList() {

    const url = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";
    this.subcription = this.movieService
      .GetMovie(url)
      .subscribe((data: any) => {
        this.movieList = data;
      });

    const url2 = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP07";
    this.subcription2 = this.movieService.GetMovie(url2).subscribe((data: any) => {
      this.comingSoon = data;
    })
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
    this.subcription2.unsubscribe();


  }

  ngAfterViewInit() { }

  ngAfterViewChecked() { }

}
