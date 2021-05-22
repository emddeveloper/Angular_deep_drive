import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/inside-app/service/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
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
