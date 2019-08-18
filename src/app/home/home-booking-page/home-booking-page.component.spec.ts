import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookingPageComponent } from './home-booking-page.component';

describe('HomeBookingPageComponent', () => {
  let component: HomeBookingPageComponent;
  let fixture: ComponentFixture<HomeBookingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBookingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
