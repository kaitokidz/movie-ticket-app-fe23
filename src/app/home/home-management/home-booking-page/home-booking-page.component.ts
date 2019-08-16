import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-booking-page',
  templateUrl: './home-booking-page.component.html',
  styleUrls: ['./home-booking-page.component.scss']
})
export class HomeBookingPageComponent implements OnInit, OnChanges, OnDestroy {
  
  seatList:any =[];
  bookedSeats: number = 0;
  remains: number = 0;
  status:boolean = false;
  bookingSeatList:any =[];
  id:any;
  currentUser:any;
  ticketList:any=[];

  subcription = new Subscription();
  
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.GetTicketBox();
    this.GetUserLogin();
  }

  GetTicketBox(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    const url: any = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.id}`;
    this.subcription = this.movieService.GetMovie(url).subscribe(
      (data:any) => {
        this.seatList = data.DanhSachGhe;
        for(let seat of this.seatList){
          if(!seat.DaDat){
            this.remains++;
            console.log(this.remains);
          }
        }
      }
    )
  }

  ShowBookedSeats(status, seat){
     let ticket:{MaGhe:string,GiaVe:number } = {
      MaGhe : seat.MaGhe,
      GiaVe : seat.GiaVe
    }
    this.ticketList.push(ticket);

    if(status){
      this.bookedSeats++;
      this.remains--;
      this.bookingSeatList.push(seat);
    }
    else{
      this.bookedSeats--;
      this.remains ++;
      for(let index in this.bookingSeatList){
        if(this.bookingSeatList[index].MaGhe === seat.MaGhe){
          this.bookingSeatList.splice(parseInt(index),1);
        }
      }
    }
  }

  GetUserLogin(){
    let user = JSON.parse(localStorage.getItem("userLogin"));
    if(user != null){
      this.currentUser = user.TaiKhoan;
    }
    else{
      alert("Please sign in for booking !");
    }
  }

  BookSeat(){
    let obj = {
      MaLichChieu: this.id, 
      TaiKhoanNguoiDung: this.currentUser, 
      DanhSachVe: this.ticketList
    };

    const url: any = `QuanLyDatVe/DatVe`;
    this.subcription = this.movieService.Post(url, obj).subscribe(
      (data:any) => {
        console.log(data);
        if(data === "Danh sách vé rỗng!"){
          alert("Please choose your seat !")
        }
        else{
          alert("Booking successfully !")
        }
      }
    );

  }

  ngOnChanges(changes:SimpleChanges){
    console.log(this.seatList);
    
    // for(let seat of this.seatList){
    //   if(!seat.DaDat){
    //     this.remains++;
    //     console.log(this.remains);
    //   }
    // }
  }
  
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
