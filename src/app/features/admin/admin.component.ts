import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminData: string;
  constructor(
    private readonly adminService: AdminService,
  ) { }

  ngOnInit() {

    this.getAdminData();
  }
  getAdminData() {
    this.adminService.getAdminData().subscribe((response: any) => {
      this.adminData = response.data;
    })
  }


}
