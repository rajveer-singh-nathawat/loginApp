import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  fullNamePattern =/^[A-Za-z\\s]{0,25}$/;
  telephoneCodePattern = '^[0-9]*$';
  usernamePattern = /^[A-Za-z]{4,8}[0-9]{2}$/;

  userForm: FormGroup;
  constructor(private readonly builder: FormBuilder,
    private readonly sharedService: SharedService,
    private readonly router: Router) { }

  ngOnInit() {
    this.inItForm();
  }
  inItForm() {
    this.userForm = this.builder.group({
      fullName: [null,[Validators.required,Validators.pattern(this.fullNamePattern)]],
      userName: [null,[,Validators.required,Validators.pattern(this.usernamePattern)]],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      email: [null,[ Validators.required,Validators.email]],
      mobileNo: [null,[ Validators.required,Validators.maxLength(18),Validators.pattern(this.telephoneCodePattern)]],

    })
  }
  onSubmit() {
    this.sharedService.registerUser(this.userForm.value).subscribe((response)=>{
      this.router.navigate(['authenticate/login']);
    });
    
  }
  

}
