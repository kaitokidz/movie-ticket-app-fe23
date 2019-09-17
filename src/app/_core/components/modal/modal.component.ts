import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  movie:any;

  constructor(private transferService : TransferService, private router: Router) { }

  ngOnInit() {
    this.transferService.transferredMovieDetail.subscribe((data:any) => {
      this.movie = data;
      console.log(data);
      
    })
  }

  // SeeMovieDetail(){
  //   this.router.navigate(
  //     ["/home/movie-page", this.movie.MaPhim],
  //     {queryParams: {tenPhim: this.movie.TenPhim}}
  //   )
  // }

}
