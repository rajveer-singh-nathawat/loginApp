import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedcomponentsComponent } from './sharedcomponents.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SharedcomponentsComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedcomponentsRoutingModule { }
