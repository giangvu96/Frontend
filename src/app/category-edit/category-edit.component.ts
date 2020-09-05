import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
  categoryId: number = 0;
  model: CategoryModel = new CategoryModel();

  constructor(
    private router: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.router.params.subscribe((params) => {
      this.categoryId = params.id;
    });

    console.log(this.categoryId);
    var result: any;
    this.categoryService.getById(this.categoryId).subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        alert('Không tồn tại danh mục này');
      },
      () => {
        this.model.categoryName = result.object.categoryName;
      }
    );
  }

  submitData() {
    if (this.model.formGroup.valid) {
      this.categoryService
        .edit({
          id: this.categoryId,
          categoryName: this.model.categoryName,
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
