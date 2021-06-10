import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users = [];
  subscription: Subscription;
  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.usersService.getDatafromServer();
    this.subscription = this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
