import { UserService } from 'src/app/_core/services/user.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin-users-management',
  templateUrl: './admin-users-management.component.html',
  styleUrls: ['./admin-users-management.component.scss']
})
export class AdminUsersManagementComponent implements OnInit {

  public listUsers = [];
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {

    const url = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";

    this._userService.GetUsers(url).subscribe((data: any) => {
      this.listUsers = data;
      console.log("Inside :" + this.listUsers);
    });
    console.log("Outside :" + this.listUsers);
  }

}
