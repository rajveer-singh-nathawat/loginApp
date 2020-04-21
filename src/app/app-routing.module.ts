import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from './sharedservices/routeguard/guard.service';

const routes: Routes = [
{
  path: '',
  loadChildren:  './home/home.module#HomeModule',
  canActivate: [GuardService],
},
{
  path : 'authenticate',
  loadChildren: './sharedcomponents/sharedcomponents.module#SharedcomponentsModule'
},
{
  path : '**',
  redirectTo: '.sharedcomponents/404',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
