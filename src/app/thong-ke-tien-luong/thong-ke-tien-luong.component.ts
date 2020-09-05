import { Component, OnInit } from '@angular/core';
import { DichvuService } from '../services/dichvu.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-thong-ke-tien-luong',
  templateUrl: './thong-ke-tien-luong.component.html',
  styleUrls: ['./thong-ke-tien-luong.component.css'],
})
export class ThongKeTienLuongComponent implements OnInit {
  nhanVien = [];
  dichvu_all = [];
  total: number = 0;

  constructor(
    private dichvuService: DichvuService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    var result1: any;
    this.categoryService.getList().subscribe(
      (res) => {
        result1 = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.nhanVien = result1.object.items;
        this.total = result1.object.total;
        this.getThongKeTienLuong();
      }
    );
  }

  getThongKeTienLuong() {
    var result: any;
    this.dichvuService.getList().subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        var thong_ke_tat_ca = [];
        this.nhanVien.forEach((el) => {
          thong_ke_tat_ca.push({
            CategoryName: el.categoryName,
            DichVu: result.object.items
              .filter((item) => item.CategoryId == el.id)
              .reduce(
                (tong, el) =>
                  tong == '' ? tong + el.Supplier : tong + ', ' + el.Supplier,
                ''
              ),
            Price: result.object.items
              .filter((item) => item.CategoryId == el.id)
              .reduce((tong, el) => tong + el.Price, 0),
          });
        });

        this.dichvu_all = thong_ke_tat_ca;
      }
    );
  }
}
