import { Component } from '@angular/core';

import { TimerService } from './service/timer/timer.service';
import { Timer } from './timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pomodoro-clock';
  timerMinute : Timer["minute"];
  timerSecond : Timer["second"];
  state : 'start' | 'stop';

  constructor(private timerService: TimerService) { }

  ngOnInit() {

  }

}
