import { Component, OnInit } from '@angular/core';

import { TimerService } from '../service/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  minutes: number;
  seconds: number = 0;
  state: 'start' | 'stop';
  type: 'session' | 'break';
  interval: any;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.type = 'session';

    this.timerService.currentSessionMinute.subscribe((value) => {
      this.minutes = value;
    });

    this.timerService.currentSessionSecond.subscribe((value) => {
      this.seconds = value;
    });

    this.timerService.currentState.subscribe((value) => {
      this.state = value;
    });
  }

  changeState(value: 'start' | 'stop'): void {
    if (this.state === 'start') {
      this.setTimerOff();
    }
    else if (this.state === 'stop') {
      this.setTimerOn();
    }
    this.setState(value);
  }

  setState(value: 'start' | 'stop'): void {
    this.state = value;
    this.timerService.setState(value);
  }

  setTimerOn(): void {
    this.interval = setInterval(() => {
      if (this.seconds === 0) {
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }

      if (this.minutes === 0 && this.seconds === 0) {
        if (this.type === 'break') {
          this.setSessionTimer();
        } else if (this.type === 'session') {
          this.setBreakTimer();
        }
      }
    }, 1); 
  }

  setTimerOff(): void {
    clearInterval(this.interval);
  }

  setSessionTimer(): void {
    this.timerService.currentSessionMinute.subscribe((value) => {
      this.minutes = value;
    });
    this.timerService.currentSessionSecond.subscribe((value) => {
      this.seconds = value;
    });
    this.setTimerType('session');
  }

  setBreakTimer(): void {
    this.timerService.currentBreakMinute.subscribe((value) => {
      this.minutes = value;
    });
    this.timerService.currentBreakSecond.subscribe((value) => {
      this.seconds = value;
    });
    this.setTimerType('break');
  }

  setTimerType(value: 'session' | 'break'): void {
    this.type = value;
  }

  skipTimer(): void {
    if (this.type === 'break') {
      this.setSessionTimer();
    } else if (this.type === 'session') {
      this.setBreakTimer();
    }
  }

  resetTimer(): void {
    this.setTimerOff();
    this.setState('stop');
    this.timerService.currentSessionMinute.subscribe((value) => {
      this.minutes = value;
    });
    this.timerService.currentSessionSecond.subscribe((value) => {
      this.seconds = value;
    });
  }

}
