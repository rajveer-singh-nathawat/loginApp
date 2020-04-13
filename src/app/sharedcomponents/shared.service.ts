import { Injectable, NgZone } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// const authHeaderString = 'X-Authorization';
// const contentTypeHeaderString = 'application/json';

// const signInHttpHeaders = new HttpHeaders({
//   'Content-Type': contentTypeHeaderString,
//   // 'Accept': 'application/json',
//   //  'Access-Control-Allow-Origin': '*',
// //  'Access-Control-Allow-Credentials': 'true',
//   //  'Access-Control-Allow-Headers': authHeaderString,
//   //  'Access-Control-Expose-Headers': authHeaderString,
//   // 'responseType': contentTypeHeaderString,
// });

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly zone: NgZone,
  ) { }

  onLogin(data:any){
    // const body = JSON.stringify(data);
    // const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<any>('http://localhost:8020/signin', data)
    .pipe(
    map(resp => {
          if(resp.jwt){
            this.resolveSessionParams(resp);
            return resp.jwt;
          }
          return null;
        }));

  }
  resolveSessionParams(resp) {
    sessionStorage.setItem('token',resp.jwt);
  }
}
