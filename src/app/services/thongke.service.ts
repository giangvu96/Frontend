import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root',
})
export class ThongKeService {
  constructor(private api: API) {}

  getList() {
    return this.api.get('/api/Product/list-by-user');
  }

  add(data: any) {
    return this.api.post('/api/Product/add', data);
  }

  getById(id: number) {
    return this.api.get(`/api/Product/get-by-id/${id}`);
  }
}
