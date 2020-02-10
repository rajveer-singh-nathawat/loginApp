import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { WelcomeComponent } from '../features/welcome/welcome.component';
import { AdminComponent } from '../features/admin/admin.component';
import { UserComponent } from '../features/user/user.component';

@NgModule({
  declarations: [HomeComponent, TopnavComponent, BottomnavComponent, WelcomeComponent, AdminComponent, UserComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
