import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from 'src/app/sharedservices/authservice/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userInfo : string;
  constructor(
    private readonly userService: UserService,
    private readonly auth: AuthService
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){

    this.userService.getUserData().subscribe((data:any) => {
      this.userInfo =data.data;
    })
  }
  

}
