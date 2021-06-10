import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  users = {
    id: 0,
    name: '',
    age: 0,
  };
  id: number;
  subscribtion: Subscription;
  constructor(
    private userservice: UserService,
    private activatedRoute: ActivatedRoute
  ) {}
  updateUsers(id: number) {
    let updateUserdata = {
      id: id,
      name: this.users.name,
      age: this.users.age,
    };
    this.userservice.updateUsers(updateUserdata);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.users = this.userservice.getUsersById(this.id);
    }, 3000);
    this.subscribtion = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.users = this.userservice.getUsersById(this.id);
      }
    );
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
