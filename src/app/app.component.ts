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
  state : 'start' | 'stop';

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.currentState.subscribe((value) => {
      this.state = value;
    });
  }

  switchState(value: any): void {
    this.state = value;
    console.log(value);
  }

}
