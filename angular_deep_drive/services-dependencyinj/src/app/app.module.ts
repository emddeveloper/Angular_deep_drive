import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveUser } from './activeUser/activeuser.component';

import { AppComponent } from './app.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';

@NgModule({
  declarations: [AppComponent, ActiveUser, InactiveUserComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
