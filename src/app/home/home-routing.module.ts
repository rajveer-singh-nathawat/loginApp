import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../features/welcome/welcome.component';
import { HomeComponent } from './home.component';
import { AdminComponent } from '../features/admin/admin.component';
import { UserComponent } from '../features/user/user.component';
import { GuardService } from '../sharedservices/routeguard/guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [GuardService],
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
      },
      {
        path: 'admin',
        component: AdminComponent,
        pathMatch: 'full',
      },
      {
        path: 'user',
        component: UserComponent,
        pathMatch: 'full',
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
