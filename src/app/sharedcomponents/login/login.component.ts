import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/sharedservices/authservice/auth.service';
import { SharedService } from '../shared.service';
import { HttpResponse } from '@angular/common/http';

export class User {
  constructor(
    public userName: string,
    public password: string
  ) {}
  }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  signinForm: FormGroup;
  signinError = 'invalid credentials';
  isLogin: boolean = false;
  constructor(private readonly builder: FormBuilder,
              private readonly router: Router,
              private readonly auth: AuthService,
              private readonly sharedService: SharedService) { }

  ngOnInit() {
    this.inItForm();
  }
  handleLogin(){
    // this.user = this.signinForm.value;
    this.sharedService.onLogin(this.signinForm.value).subscribe((data: any) => {
      if(this.auth.authenticate(data)) {
        this.router.navigate(['/welcome']); 
      }
      else{
        this.router.navigateByUrl('/'); 
      }
    // if (this.auth.authenticate(this.user.userName, this.user.password)) {
    //   this.isLogin = false;
    //   this.router.navigate(['welcome']);
    //     } else {
    //   this.isLogin = true;
    // }
    
  })}
  inItForm() {
    this.signinForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  }