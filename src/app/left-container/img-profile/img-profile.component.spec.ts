import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgProfileComponent } from './img-profile.component';

describe('ImgProfileComponent', () => {
  let component: ImgProfileComponent;
  let fixture: ComponentFixture<ImgProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
