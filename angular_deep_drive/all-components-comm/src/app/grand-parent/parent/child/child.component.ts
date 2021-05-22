import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/inside-app/service/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  text = '';
  getText: string;
  constructor(private comm: CommunicationService) {}
  send() {
    this.comm.sendText(this.text);
  }
  timer = setInterval(() => {
    this.comm.sendText(new Date().getMilliseconds());
  }, 2000);

  ngOnInit(): void {
    this.comm.servicveTextObservable$.subscribe((m: string) => {
      this.getText = m;
      if (typeof m != 'number') clearInterval(this.timer);
    });
  }
}
