import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-chatbox-two',
  templateUrl: './chatbox-two.component.html',
  styleUrls: ['./chatbox-two.component.css'],
})
export class ChatboxTwoComponent implements OnInit {
  constructor(private commService: CommunicationService) {}
  send(MessagelocalRef: any) {
    let params = {
      message: MessagelocalRef.value,
      sender: 'chatbox2',
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
