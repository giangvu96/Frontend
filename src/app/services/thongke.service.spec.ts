import { TestBed } from '@angular/core/testing';

import { ThongKeService } from './thongke.service';

describe('ThongKeService', () => {
  let service: ThongKeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DichVuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
