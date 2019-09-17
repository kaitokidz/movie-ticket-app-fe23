import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/_core/services/movie.service";


@Component({
  selector: 'app-admin-movies-management',
  templateUrl: './admin-movies-management.component.html',
  styleUrls: ['./admin-movies-management.component.scss']
})

export class AdminMoviesManagementComponent implements OnInit {

  listMovies: any;
  movieDetail: any = [];

  constructor(
    private _movieService: MovieService,
  ) { }

  ngOnInit() {
    this.GetMovieList();
  }

  GetMovieList() {
    const url = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP10";

    this._movieService.GetMovie(url).subscribe((data: any) => {
      this.listMovies = data;
    });
  }

  DeleteMovie(_movieID) {

    const url = `QuanLyPhim/XoaPhim?MaPhim=${_movieID}`;

    this._movieService.Delete(url).subscribe((data: any) => {
      alert(data);
    });
  }

  updateMovie(_movieID) {

    const url = `QuanLyPhim/LayChiTietPhim?MaPhim=${_movieID}`;
    this._movieService.GetMovie(url).subscribe((data: any) => {
      this.movieDetail = data;
    });
  }

}
