import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcomponentsRoutingModule } from './sharedcomponents-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedcomponentsComponent } from './sharedcomponents.component';

@NgModule({
  declarations: [LoginComponent, SharedcomponentsComponent],
  imports: [
    CommonModule,
    SharedcomponentsRoutingModule
  ]
})
export class SharedcomponentsModule { }
