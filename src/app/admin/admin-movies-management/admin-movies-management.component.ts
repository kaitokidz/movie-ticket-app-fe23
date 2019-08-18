import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/_core/services/movie.service";
import { TransferService } from "src/app/_core/services/transfer.service";
import { Subscription, Observable, from } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { MovieEntities } from './MovieModels'


@Component({
  selector: 'app-admin-movies-management',
  templateUrl: './admin-movies-management.component.html',
  styleUrls: ['./admin-movies-management.component.scss']
})

export class AdminMoviesManagementComponent implements OnInit {

  status: boolean = true;
  movieList: any;


  constructor(
    private _movieService: MovieService,
  ) { }

  ngOnInit() {
    this.GetMovieList();
    console.log(this.movieList);
  }

  GetMovieList() {

    const url = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";

    this._movieService.GetMovie(url).subscribe((data: any) => {
      this.movieList = data;
      console.log(this.movieList);
    });

  }
}
