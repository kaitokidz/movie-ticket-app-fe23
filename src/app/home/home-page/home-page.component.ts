import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public currentComponent: string = 'news';

  constructor() { }

  ngOnInit() {
  }

  switchComponent(component: string) {

    console.log(component);


    if (component == 'news')

      this.currentComponent = 'news';

    else if (component == 'application')

      this.currentComponent = 'application';

    else this.currentComponent = 'cinemas';
  }

}
