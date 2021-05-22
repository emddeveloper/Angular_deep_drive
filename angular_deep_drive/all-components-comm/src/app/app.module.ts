import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { ParentComponent } from './grand-parent/parent/parent.component';
import { ChildComponent } from './grand-parent/parent/child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
