import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDisplayPipe } from './pipe/timer-display.pipe';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeSelectorComponent,
    TimerComponent,
    TimerDisplayPipe,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
