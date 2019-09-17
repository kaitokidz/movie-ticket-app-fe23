import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  public isLogin = false;

  constructor() { }

  ngOnInit() {
    this.checkLogin();
  }



  checkLogin() {

    if (localStorage.getItem("userLogin")) {

      this.isLogin = true;

    }
  }

  signOut() {
    localStorage.removeItem('userLogin');
  }

}
