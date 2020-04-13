import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../authservice/auth.service';
import { MatSnackBar, } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HttpintercepterService implements HttpInterceptor {

  constructor(
    private readonly auth: AuthService,
    private readonly snack: MatSnackBar,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token =sessionStorage.getItem('token');
    if(token){
      req = req.clone({
      headers: req.headers.set('X-Authorization', 'Bearer ' + token).set('Content-Type', 'application/json')
    });
    }
    
    return next.handle(req).pipe(
      tap(
        (response: HttpEvent<any>) => {},
        (err: any) => {
          if(err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.auth.logOut();
              this.snack.open(err.error.errorMessage || err.message || 'Unauthorized User', 'Dismiss', {duration: 6000});
            }
            if(err.status === 500) {
              this.snack.open(err.error.errorMessage || err.message, 'Dismiss', {duration: 6000});
            }
          }

        }
      )
    )
  }

}
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpintercepterService,
      multi: true
    }
  ]
})
export class HttpRequestInterceptorModule { }