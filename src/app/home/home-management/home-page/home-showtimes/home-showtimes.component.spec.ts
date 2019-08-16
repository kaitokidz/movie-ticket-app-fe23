import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShowtimesComponent } from './home-showtimes.component';

describe('HomeShowtimesComponent', () => {
  let component: HomeShowtimesComponent;
  let fixture: ComponentFixture<HomeShowtimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShowtimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShowtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
