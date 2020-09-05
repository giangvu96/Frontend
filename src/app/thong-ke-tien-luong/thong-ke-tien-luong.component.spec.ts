import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeTienLuongComponent } from './thong-ke-tien-luong.component';

describe('ThongKeTienLuongComponent', () => {
  let component: ThongKeTienLuongComponent;
  let fixture: ComponentFixture<ThongKeTienLuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongKeTienLuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongKeTienLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
