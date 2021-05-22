import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatboxOneComponent } from './chatbox-one/chatbox-one.component';
import { ChatboxTwoComponent } from './chatbox-two/chatbox-two.component';

@NgModule({
  declarations: [AppComponent, ChatboxOneComponent, ChatboxTwoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
