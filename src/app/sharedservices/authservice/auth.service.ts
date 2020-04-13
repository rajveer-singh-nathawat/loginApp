import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;

  constructor(private readonly route: Router ) { }
  authenticate(token) {
   if (token === sessionStorage.getItem('token')) {
     this.username = JSON.parse(atob(token.split('.')[1])).fullName;
     console.log(this.username);
    sessionStorage.setItem('authenticateUser', this.username);
    return true;
   } else {
   return false;
   }
 }

 userData() {
let principle = sessionStorage.getItem('authenticateUser');
 }
 isUserLogin() {
   const user = sessionStorage.getItem('authenticateUser');
   return !(user === null );
 }
 logOut() {
 sessionStorage.clear();
  this.route.navigate(['signin']);
 }
}
