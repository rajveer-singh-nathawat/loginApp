import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/sharedservices/authservice/auth.service';
import { SharedService } from 'src/app/sharedcomponents/shared.service';

interface TopMenuItem {
  role: string[];
  name?: string;
  state?: string;
}
const primaryDefaultMenu : TopMenuItem[] = [
  {
    role: ['ALL'],
    name: 'WELCOME',
    state: 'welcome'
  },
  {
    role: ['ROLE_ADMIN','ROLE_USER'],
    name: 'USER',
    state: 'user'
  },
  {
    role: ['ROLE_ADMIN'],
    name: 'ADMIN',
    state: 'admin'
  },
];
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
principal: string;
primaryMenu: TopMenuItem[] = [];
  constructor(private readonly auth: AuthService,
    private  readonly sharedService: SharedService) { }

  ngOnInit() {
    this.principal = this.auth.userData();
    this.filterMenu(primaryDefaultMenu, this.primaryMenu);
  }
  filterMenu(source: TopMenuItem[], filtered: TopMenuItem[]) {
    source.forEach(element => {
      const arg :string[] = element.role;
      if(this.sharedService.hasResource(arg)){
        filtered.push(element);
      }
    });
  }
  onLoggedOut(){
this.auth.logOut();
  }

}
