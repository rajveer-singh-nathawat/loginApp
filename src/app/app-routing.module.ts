import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '',
  loadChildren:  './home/home.module#HomeModule'
},
{
  path : 'signin',
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
