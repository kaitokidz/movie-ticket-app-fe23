import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  public isLogin = false;

  constructor() { }

  ngOnInit() {
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
