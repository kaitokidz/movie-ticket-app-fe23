import { Component, OnInit, ViewChild, OnDestroy, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  userList:any=[];
  subcription = new Subscription();
  
  @ViewChild('signUp', {static:false}) signUpForm:NgForm;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    console.log(this.signUpForm);
    
  }

  @HostListener("window:beforeunload") 
  canDeactivate () {
    console.log(this.signUpForm.submitted)
    return this.signUpForm.submitted;
  }

  SignUp(value){
    const objUser = {
      TaiKhoan: value.TaiKhoan,
      MatKhau: value.MatKhau,
      Email: value.Email,
      SoDT: value.SoDT,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    }

    const url = "QuanLyNguoiDung/ThemNguoiDung";
    this.subcription = this.movieService.Post(url, objUser).subscribe(
      (data:any) => {
        if (data === "Tài khoản đã tồn tại"){
          alert ("Account exists !");
        }
        else{
          alert("Your account has been successfully created !");
        }
      }
    )
    this.userList.push(value);
    this.signUpForm.reset();
  }

  Update(value){
    let taiKhoan = value.getAttribute('data-taikhoan');
    let matkhau = value.getAttribute('data-matkhau');
    let email = value.getAttribute('data-email');
    let sodt = value.getAttribute('data-sodt');
    let maloainguoidung = value.getAttribute('data-maloainguoidung');
    this.signUpForm.setValue({
      TaiKhoan:taiKhoan,
      MatKhau:matkhau,
      Email:email,
      SoDT:sodt,
      MaLoaiNguoiDung:maloainguoidung
    })
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
