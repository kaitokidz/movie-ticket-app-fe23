import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-admin-movie-modal',
  templateUrl: './admin-movie-modal.component.html',
  styleUrls: ['./admin-movie-modal.component.scss']
})
export class AdminMovieModalComponent implements OnInit {

  @Input() movieDetail
  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit() {
  }

  addMovie(_movie_data) {
    const url = 'QuanLyPhim/ThemPhimMoi';
    this._movieService.Post(url, _movie_data).subscribe((data: any) => {
      if (data.MaPhim) {
        alert("Thêm Phim Mới Thành Công");
      } else {
        alert("Thêm Phim Mới Thất Bại");
      }
    })
  }

}
