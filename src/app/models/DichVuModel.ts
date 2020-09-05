import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

export class DichVuModel {
  tenDichVu: string = '';
  nhaCungCap: string = '';
  nhanVien: number;
  price: number = 0;

  formGroup: FormGroup = null;

  constructor() {
    var fb = new FormBuilder();
    this.formGroup = fb.group({
      tenDichVu: new FormControl('', Validators.required),
      nhaCungCap: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      nhanVien: new FormControl('', Validators.required),
    });
  }
}
