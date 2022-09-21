import { Component, OnInit } from '@angular/core';

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

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.currentBreakMinute.subscribe((value) => {
      this.timerMinute = value;
    });

    this.timerService.currentBreakSecond.subscribe((value) => {
      this.timerSecond = value;
    });

    this.timerService.currentSessionMinute.subscribe((value) => {
      this.timerMinute = value;
    });

    this.timerService.currentSessionSecond.subscribe((value) => {
      this.timerSecond = value;
    });
  }

}
