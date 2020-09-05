import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DichVuModel } from '../models/DichVuModel';
import { DichvuService } from '../services/dichvu.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-dichvu-edit',
  templateUrl: './dichvu-edit.component.html',
  styleUrls: ['./dichvu-edit.component.css'],
})
export class DichvuEditComponent implements OnInit {
  danhSachNhanVien = [];
  nhanVienId: number = 0;

  model: DichVuModel = new DichVuModel();

  constructor(
    private router: ActivatedRoute,
    private dichvuService: DichvuService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getCategory();
  }

  getCategory() {
    this.router.params.subscribe((params) => {
      this.nhanVienId = params.id;
    });

    var result: any;
    this.dichvuService.getById(this.nhanVienId).subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        alert('Không tồn tại danh mục này');
      },
      () => {
        this.model.tenDichVu = result.object.productName;
        this.model.nhaCungCap = result.object.supplier;
        this.model.price = result.object.price;
        this.model.nhanVien = result.object.categoryId;
      }
    );
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
        .edit({
          id: this.nhanVienId,
          productName: this.model.tenDichVu,
          categoryId: this.model.nhanVien,
          price: this.model.price,
          amount: 0,
          supplier: this.model.nhaCungCap,
        })
        .subscribe(
          (res) => {},
          (err) => {
            alert('Cập nhật không thành công');
          },
          () => {
            alert('Cập nhật thành công');
          }
        );
    }
  }
}
