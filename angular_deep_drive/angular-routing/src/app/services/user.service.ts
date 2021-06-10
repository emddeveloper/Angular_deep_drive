import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export interface users {
  id: number;
  name: string;
  age: number;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new Subject<any>();
  serverModifiedData = [];
  getUsers(): Observable<any> {
    return this.userSubject.asObservable();
  }
  getUsersById(id: number) {
    console.log(this.serverModifiedData[id - 1]);
    return this.serverModifiedData[id - 1];
  }
  getDatafromServer() {
    this.http
      .get('https://reqres.in/api/users?page=1')
      .subscribe((res: any) => {
        this.serverModifiedData = [];
        res.data.forEach((data: any) => {
          let serverData = { id: 0, name: '', age: 0 };
          serverData.id = data.id;
          serverData.name = data.first_name;
          serverData.age = Math.floor(Math.random() * 100);
          this.serverModifiedData.push(serverData);
        });
        console.log(this.serverModifiedData);
        this.userSubject.next(this.serverModifiedData);
      });
    return this.serverModifiedData;
  }
  updateUsers(data: users) {
    console.log(data);
    this.serverModifiedData[data.id - 1].name = data.name;
    this.serverModifiedData[data.id - 1].age = data.age;
    this.userSubject.next(this.serverModifiedData);

    this.http
      .put('https://reqres.in/api/users/3', data)
      .subscribe((data) => console.log(data));
  }
  constructor(private http: HttpClient) {}
}
