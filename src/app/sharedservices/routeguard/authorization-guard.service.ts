import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/sharedcomponents/shared.service';

@Injectable()
export class AuthorizationGuardService implements CanActivate, CanActivateChild  {

  constructor(private readonly router: Router,
    private readonly sharedService: SharedService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.sharedService.hasResource(route.data.roles)) {
        return true;
    }
    this.router.navigate(['authenticate']);
    return false;
}

canActivateChild(childroute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
     return this.canActivate(childroute, state);
}
}
