import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvuEditComponent } from './dichvu-edit.component';

describe('DichvuEditComponent', () => {
  let component: DichvuEditComponent;
  let fixture: ComponentFixture<DichvuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichvuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichvuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
