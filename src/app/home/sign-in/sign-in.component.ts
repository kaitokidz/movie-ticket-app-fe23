import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  bannedAccount = ['unknown', 'user1', 'unknownuser'];
  subcription = new Subscription();
  public inValidLogin = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'TaiKhoan': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]+'), this.BannedAccount.bind(this)]),
      'MatKhau': new FormControl(null, [Validators.required, Validators.minLength(5)]),
    })
  }

  BannedAccount(control: FormControl) {
    for (let account of this.bannedAccount) {
      if (account === control.value) {
        return { 'banned': true };
      }
      else {
        return null;
      }
    }
  }

  SignIn(value) {
    const url = `QuanLyNguoiDung/DangNhap?TaiKhoan=${value.TaiKhoan}&MatKhau=${value.MatKhau}`;
    this.subcription = this.movieService.Post(url).subscribe(
      (data: any) => {
        if (data === "Tài khoản hoặc mật khẩu không đúng !") {
          this.inValidLogin = true;
        } else {
          localStorage.setItem("userLogin", JSON.stringify(data));
          document.location.href = "/";
        }
      });



  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
