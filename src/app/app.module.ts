import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//services
import { API } from './services/api';
import { AccountService } from './services/account.service';
import { AdminComponent } from './admin/admin.component';
import { CategoryService } from './services/category.service';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DichvuComponent } from './dichvu/dichvu.component';
import { DichvuAddComponent } from './dichvu-add/dichvu-add.component';
import { DichvuEditComponent } from './dichvu-edit/dichvu-edit.component';
import { ThongKeTienLuongComponent } from './thong-ke-tien-luong/thong-ke-tien-luong.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    DichvuComponent,
    DichvuAddComponent,
    DichvuEditComponent,
    ThongKeTienLuongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    // NgbModule.forRoot(),
  ],
  providers: [API, AccountService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
