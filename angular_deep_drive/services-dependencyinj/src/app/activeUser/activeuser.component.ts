import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.srvice';

@Component({
  selector: 'appActiveUser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.css'],
})
export class ActiveUser implements OnInit {
  constructor(private dataservice: DataService) {}
  users = [];
  updateStatus(index: number, status: string) {
    this.dataservice.updateStatus(index, status);
  }
  ngOnInit() {
    this.users = this.dataservice.users;
  }
}
