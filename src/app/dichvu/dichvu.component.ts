import { Component, OnInit } from '@angular/core';
import { DichvuService } from '../services/dichvu.service';

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls: ['./dichvu.component.css'],
})
export class DichvuComponent implements OnInit {
  dichvu_all = [];
  total: number = 0;

  constructor(private dichvuService: DichvuService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    var result: any;
    this.dichvuService.getList().subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.dichvu_all = result.object.items;
        this.total = result.object.total;
      }
    );
  }

  remove(id: number) {
    if (window.confirm('Bạn thực sự muốn xóa')) {
      this.dichvuService.delete(id).subscribe(
        (res) => {},
        (err) => {
          console.log(err);
          alert('Xóa không thành công');
        },
        () => {
          alert('Xóa thành công');
          this.getCategories();
        }
      );
    } else {
      // alert('Hành động bị hủy bởi người dùng');
    }
  }
}
