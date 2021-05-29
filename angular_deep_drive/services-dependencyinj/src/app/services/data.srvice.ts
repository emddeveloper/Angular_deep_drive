import { Injectable } from '@angular/core';
import { LogsService } from './logs.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private logs: LogsService) {}
  users = [
    {
      status: 'active',
      name: 'SK Islam',
    },
    {
      status: 'active',
      name: 'Tania',
    },
    {
      status: 'inactive',
      name: 'Sohom',
    },
    {
      status: 'inactive',
      name: 'Rittik',
    },
  ];
  updateStatus(index: number, status: string) {
    this.users[index].status = status;
    if (status === 'active') this.logs.logme(status);
    if (status === 'inactive') this.logs.logme(status);
  }
}
