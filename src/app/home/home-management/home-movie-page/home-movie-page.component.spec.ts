import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoviePageComponent } from './home-movie-page.component';

describe('HomeMoviePageComponent', () => {
  let component: HomeMoviePageComponent;
  let fixture: ComponentFixture<HomeMoviePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMoviePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
