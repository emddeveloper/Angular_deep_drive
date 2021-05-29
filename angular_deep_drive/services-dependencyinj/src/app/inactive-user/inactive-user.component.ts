import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.srvice';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css'],
})
export class InactiveUserComponent implements OnInit {
  constructor(private dataservice: DataService) {}
  users = [];
  updateStatus(index: number, status: string) {
    this.dataservice.updateStatus(index, status);
  }
  ngOnInit() {
    this.users = this.dataservice.users;
  }
}
