import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDisplayPipe } from './pipe/timer-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeSelectorComponent,
    TimerComponent,
    TimerDisplayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
