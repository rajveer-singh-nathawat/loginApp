import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/sharedservices/authservice/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(
    private readonly auth: AuthService,
    private readonly http: HttpClient
  ) { }
  getUserData() {
    return this.http.get<any>(`http://localhost:8020/user/data`);
    
  }
}
