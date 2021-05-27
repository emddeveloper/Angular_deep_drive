import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { changeBgDirective } from './directives/changebg.directive';
import { changeBgByMouseEventDirective } from './directives/changeBgByMouseEvent.directive';
import { ChangeBGByRendererDirective } from './directives/ChangeBGByRenderer.directive';
import { ChangebgbyhostlistnerhostbindingDirective } from './directives/changebgbyhostlistnerhostbinding.directive';
import { DirectivepropertybindingDirective } from './directives/directivepropertybinding.directive';
import { CustomstructuralDirective } from './directives/customstructural.directive';

@NgModule({
  declarations: [
    AppComponent,
    changeBgDirective,
    ChangeBGByRendererDirective,
    changeBgByMouseEventDirective,
    ChangebgbyhostlistnerhostbindingDirective,
    DirectivepropertybindingDirective,
    CustomstructuralDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
