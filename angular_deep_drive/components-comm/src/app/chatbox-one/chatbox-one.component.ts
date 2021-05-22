import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-chatbox-one',
  templateUrl: './chatbox-one.component.html',
  styleUrls: ['./chatbox-one.component.css'],
})
export class ChatboxOneComponent implements OnInit {
  constructor(private commService: CommunicationService) {}

  send(MessagelocalRef: any) {
    let params = {
      message: MessagelocalRef.value,
      sender: 'chatbox1',
    };
    this.commService.sendMessage(params);
  }
  chatMessages: any;
  ngOnInit(): void {
    this.commService.getMessagesObservable$.subscribe((res) => {
      this.chatMessages = res;
    });
  }
}
