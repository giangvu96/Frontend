import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { DichvuComponent } from './dichvu/dichvu.component';
import { DichvuAddComponent } from './dichvu-add/dichvu-add.component';
import { DichvuEditComponent } from './dichvu-edit/dichvu-edit.component';
import { ThongKeTienLuongComponent } from './thong-ke-tien-luong/thong-ke-tien-luong.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'DanhMucNhanVien',
    component: CategoryComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'ThemMoiNhanVien',
    component: CategoryAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'ChinhSuaNhanVien/:id',
    component: CategoryEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },

  {
    path: 'DanhMucDichVu',
    component: DichvuComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'ThemMoiDichVu',
    component: DichvuAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'ChinhSuaDichVu/:id',
    component: DichvuEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'ThongKeTienLuong',
    component: ThongKeTienLuongComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
