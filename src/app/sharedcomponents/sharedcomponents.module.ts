import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcomponentsRoutingModule } from './sharedcomponents-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedcomponentsComponent } from './sharedcomponents.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SharedcomponentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedcomponentsRoutingModule
  ]
})
export class SharedcomponentsModule { }
