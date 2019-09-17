import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoviesManagementComponent } from './admin-movies-management.component';

describe('AdminMoviesManagementComponent', () => {
  let component: AdminMoviesManagementComponent;
  let fixture: ComponentFixture<AdminMoviesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMoviesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMoviesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
