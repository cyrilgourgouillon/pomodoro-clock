import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSelectorComponent } from './time-selector/time-selector.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDisplayPipe } from './pipe/timer-display.pipe';
import { SettingsComponent } from './settings/settings.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TimeSelectorComponent,
    TimerComponent,
    TimerDisplayPipe,
    SettingsComponent,
    TasksContainerComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
