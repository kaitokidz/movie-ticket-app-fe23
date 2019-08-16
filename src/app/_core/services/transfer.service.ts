import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private movieList = new BehaviorSubject ([] as any);
  transferredMovieList = this.movieList.asObservable();

  private movieDetail = new BehaviorSubject ({} as object);
  transferredMovieDetail = this.movieDetail.asObservable();
  
  constructor() { }

  StoreMovieList(data : any){
    this.movieList.next(data);
  }

  StoreMovieDetail(data : any){
    this.movieDetail.next(data);
  }
}
