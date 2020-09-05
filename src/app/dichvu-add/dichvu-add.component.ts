import { Component, OnInit } from '@angular/core';
import { DichVuModel } from '../models/DichVuModel';
import { DichvuService } from '../services/dichvu.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-dichvu-add',
  templateUrl: './dichvu-add.component.html',
  styleUrls: ['./dichvu-add.component.css'],
})
export class DichvuAddComponent implements OnInit {
  danhSachNhanVien = [];
  model: DichVuModel = new DichVuModel();

  constructor(
    private dichvuService: DichvuService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    var result: any;
    this.categoryService.getList().subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.danhSachNhanVien = result.object.items;
      }
    );
  }
  submitData() {
    if (this.model.formGroup.valid) {
      this.dichvuService
        .add({
          productName: this.model.tenDichVu,
          categoryId: this.model.nhanVien,
          price: this.model.price,
          amount: 0,
          supplier: this.model.nhaCungCap,
        })
        .subscribe(
          (res) => {},
          (err) => {
            alert('Thêm mới không thành công. Vui lòng thử lại');
          },
          () => {
            alert('Thêm mới thành công');
            this.model.tenDichVu = '';
          }
        );
    }
  }
}
