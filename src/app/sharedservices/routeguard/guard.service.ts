import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authservice/auth.service';

@Injectable({
  providedIn: 'root'
})

export class GuardService implements CanActivate, CanActivateChild{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isUserLogin()) {
      this.router.navigate(['signin']);
      return false;
    } else {
      return true;
    }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    return this.canActivate(childRoute, state);  }

  constructor(
    private auth: AuthService,
    private router: Router) { }

}
