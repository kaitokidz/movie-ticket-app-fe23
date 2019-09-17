import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginData: any = [];


  constructor() { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {

    let userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
      this.loginData = userLogin;
    }

  }



}
