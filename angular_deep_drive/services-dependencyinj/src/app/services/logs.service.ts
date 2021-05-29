import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  activeCounter = 0;
  inactiveCounter = 0;
  constructor() {}
  logme(status: string) {
    if (status === 'active') {
      this.activeCounter++;
      console.log(`Inactive to active done ${this.activeCounter}`);
    }
    if (status === 'inactive') {
      this.inactiveCounter++;
      console.log(`Active to inactive done ${this.inactiveCounter}`);
    }
  }
}
