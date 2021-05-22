import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../inside-app/service/communication.service';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.css'],
})
export class GrandParentComponent implements OnInit {
  text = '';
  getText: string;
  constructor(private comm: CommunicationService) {}
  send() {
    this.comm.sendText(this.text);
  }
  ngOnInit(): void {
    this.comm.servicveTextObservable$.subscribe(
      (m: string) => (this.getText = m)
    );
  }
}
