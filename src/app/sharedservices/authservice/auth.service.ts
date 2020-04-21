import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;

  constructor(private readonly route: Router) { }
  authenticate(token) {
    if (token === sessionStorage.getItem('token')) {
      
      return true;
    } else {
      return false;
    }
  }

  userData() {
    return sessionStorage.getItem('currentUser');;
  }
  isUserLogin() {
    const user = sessionStorage.getItem('currentUser');
    return !(user === null);
  }
  logOut() {
    sessionStorage.clear();
    this.route.navigate(['authenticate']);
  }
}
