import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../features/welcome/welcome.component';
import { HomeComponent } from './home.component';
import { AdminComponent } from '../features/admin/admin.component';
import { UserComponent } from '../features/user/user.component';
import { GuardService } from '../sharedservices/routeguard/guard.service';
import { AuthorizationGuardService } from '../sharedservices/routeguard/authorization-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [GuardService, AuthorizationGuardService],
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
        pathMatch: 'full',
        data: {roles: ['ALL']}
      },
      {
        path: 'admin',
        component: AdminComponent,
        pathMatch: 'full',
        data: {roles: ['ROLE_ADMIN']}
      },
      {
        path: 'user',
        component: UserComponent,
        pathMatch: 'full',
        data: {roles: ['ROLE_ADMIN','ROLE_USER']}
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
