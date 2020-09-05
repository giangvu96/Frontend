import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvuAddComponent } from './dichvu-add.component';

describe('DichvuAddComponent', () => {
  let component: DichvuAddComponent;
  let fixture: ComponentFixture<DichvuAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichvuAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichvuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
