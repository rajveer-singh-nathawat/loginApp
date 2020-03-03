import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/sharedservices/authservice/auth.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private readonly auth: AuthService) { }

  ngOnInit() {
  }
  onLoggedOut(){
this.auth.logOut();
  }
}
