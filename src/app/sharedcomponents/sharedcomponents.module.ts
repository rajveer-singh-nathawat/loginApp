import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcomponentsRoutingModule } from './sharedcomponents-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedcomponentsComponent } from './sharedcomponents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MaterialcompModule } from '../materialcomponent/materialcomp.module';

@NgModule({
  declarations: [LoginComponent, SharedcomponentsComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialcompModule,
    SharedcomponentsRoutingModule
  ]
})
export class SharedcomponentsModule { }
