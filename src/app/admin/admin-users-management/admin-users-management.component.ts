import { UserService } from 'src/app/_core/services/user.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin-users-management',
  templateUrl: './admin-users-management.component.html',
  styleUrls: ['./admin-users-management.component.scss']
})
export class AdminUsersManagementComponent implements OnInit {

  public listUsers = [];
  public userDetail = [];
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getListUser();
  }

  getListUser() {
    const url = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10";

    this._userService.GetUsers(url).subscribe((data: any) => {
      this.listUsers = data;
    });
  }


  deleteUser(_userID) {

    const url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${_userID}`;

    this._userService.Delete(url).subscribe((data: any) => {
      alert(data);
      window.location.reload();
    });

  }

  updateUser(_username) {
    const url = `QuanLyNguoiDung/CapNhatThongTin=${_username}`;
    this._userService.Post(url).subscribe((data: any) => {
      this.userDetail = data;
    });
  }

}
