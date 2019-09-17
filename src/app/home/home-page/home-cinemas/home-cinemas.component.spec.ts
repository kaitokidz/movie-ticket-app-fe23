import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCinemasComponent } from './home-cinemas.component';

describe('HomeCinemasComponent', () => {
  let component: HomeCinemasComponent;
  let fixture: ComponentFixture<HomeCinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
