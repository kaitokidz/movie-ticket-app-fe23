import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMovieModalComponent } from './admin-movie-modal.component';

describe('AdminMovieModalComponent', () => {
  let component: AdminMovieModalComponent;
  let fixture: ComponentFixture<AdminMovieModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMovieModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
