import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  constructor() {}
  private messages: Subject<any[]> = new Subject();
  public getMessagesObservable$ = this.messages.asObservable();
  dataArray = [];
  sendMessage(data: { message: string; sender: string }) {
    if (data.message) {
      this.dataArray.push(data);
      this.messages.next(this.dataArray);
    }
  }
}
