import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  public listMovieCount = 0;
  public listActiveUser = 0;

  constructor(
    private _movieService: MovieService,
    private _userService: UserService,
  ) { }

  ngOnInit() {
    this.GetMovieList();
    this.getListUser();
  }

  /**
   * Đếm số lượng phim
   */
  GetMovieList() {
    const url = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP10";

    this._movieService.GetMovie(url).subscribe((data: any) => {
      this.listMovieCount = data.length;
    });
  }

  /**
   * Đếm số lượng người dùng
   */
  getListUser() {
    const url = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10";

    this._userService.GetUsers(url).subscribe((data: any) => {
      this.listActiveUser = data.length;
    });
  }

}
