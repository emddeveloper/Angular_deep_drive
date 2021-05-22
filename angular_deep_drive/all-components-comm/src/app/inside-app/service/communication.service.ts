import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private serviceText = new Subject();
  public servicveTextObservable$ = this.serviceText.asObservable();
  constructor() {}
  sendText(text: any) {
    this.serviceText.next(text);
  }
}
