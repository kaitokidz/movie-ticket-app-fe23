import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.scss']
})
export class SeatItemComponent implements OnInit {
  @Input() seat:any;

  status:boolean = false;

  @Output() eventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  Book(){
    this.status = !this.status;
    this.eventEmitter.emit(this.status);
  }
}
