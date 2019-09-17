import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-admin-user-modal',
  templateUrl: './admin-user-modal.component.html',
  styleUrls: ['./admin-user-modal.component.scss']
})
export class AdminUserModalComponent implements OnInit {

  constructor(
    private _userService: UserService
  ) { }

  @Input() userDetail;

  ngOnInit() {

  }

  addUser(_userData) {

    const url = 'QuanLyNguoiDung/ThemNguoiDung';
    console.log(_userData);


    this._userService.Post(url, _userData).subscribe((data: any) => {
      console.log(data);

      if (data.TaiKhoan) {
        alert("Thêm Người Dùng Thành Công");
      } else {
        alert("Thêm Người Dùng Thất Bại");
      }
      window.location.reload();
    })

  }


}
