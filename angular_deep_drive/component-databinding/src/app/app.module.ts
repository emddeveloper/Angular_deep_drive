import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { ServerInputComponent } from './server-input/server-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerDetailsComponent,
    ServerInputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
