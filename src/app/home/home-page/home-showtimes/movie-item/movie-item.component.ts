import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/_core/services/transfer.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any;
  
  
  constructor(private router: Router, private transferService: TransferService) { }

  ngOnInit() {
  }

  SeeMovieDetail(){
    this.router.navigate(
      ["/home/movie-page", this.movie.MaPhim],
      {queryParams: {tenPhim: this.movie.TenPhim}}
    )
  }

  QuickView(){
    this.transferService.StoreMovieDetail(this.movie);
  }

}
