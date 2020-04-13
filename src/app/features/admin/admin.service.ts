import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private readonly http: HttpClient) { }
  getAdminData() {

    return this.http.get<any>(`http://localhost:8020/admin/data`);
  }
}
