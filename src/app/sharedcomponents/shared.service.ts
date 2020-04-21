import { Injectable, NgZone } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// const authHeaderString = 'X-Authorization';
// const contentTypeHeaderString = 'application/json';

// const signInHttpHeaders = new HttpHeaders({
//   'Content-Type': contentTypeHeaderString,
//   'Accept': 'application/json',
//    'Access-Control-Allow-Origin': '*',
//  'Access-Control-Allow-Credentials': 'true',
//    'Access-Control-Allow-Headers': authHeaderString,
//    'Access-Control-Expose-Headers': authHeaderString,
//   'responseType': contentTypeHeaderString,
// });

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  currentUserRole: string;
  url: string = 'http://localhost:8020';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly zone: NgZone,
  ) { }

  onLogin(data: any) {
    return this.http.post<any>(this.url+'/signin', data)
      .pipe(
        map(resp => {
          if (resp.jwt) {
            this.resolveSessionParams(resp);
            return resp.jwt;
          }
          return null;
        }));

  }
  resolveSessionParams(resp) {
    sessionStorage.setItem('token', resp.jwt);
    const username = JSON.parse(atob(sessionStorage.getItem('token').split('.')[1])).fullName;
      sessionStorage.setItem('currentUser', username);
  }
  hasResource(roles: any) {
    if (sessionStorage.getItem('token')) {
      this.currentUserRole = JSON.parse(atob(sessionStorage.getItem('token').split('.')[1])).role;
      if (roles[0] === this.currentUserRole) {
        return true;
      } else if (roles[0] === 'ALL') {
        return true;
      } else if (roles[1] === this.currentUserRole) {
        return true;
      }
    }
    return false;
  }
  registerUser(userFormData: any) {
    return this.http.post<any>(this.url+'/register', userFormData)
     
  }
}
