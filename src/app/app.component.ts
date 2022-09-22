import { Component } from '@angular/core';

import { TimerService } from './service/timer/timer.service';
import { TimerState } from './type/TimerState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pomodoro-clock';
  timerState : TimerState;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerState = this.timerService.timerState;
  }

}
