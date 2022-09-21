import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TimerService } from '../service/timer/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Output() switchStateEvent = new EventEmitter<'start' | 'stop'>();

  minutes: number;
  seconds: number = 0;

  private sessionMinute: number;
  private sessionSecond: number = 0;
  private breakMinute: number;
  private breakSecond: number = 0;

  state: 'start' | 'stop';
  type: 'session' | 'break';
  interval: any;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.type = 'session';

    this.timerService.currentSessionMinute.subscribe((value) => {
      this.sessionMinute = value;
      
      if (this.type === 'session')
        this.minutes = this.sessionMinute;
    });

    this.timerService.currentSessionSecond.subscribe((value) => {
      this.sessionSecond = value;

      if (this.type === 'session')
        this.seconds = this.sessionSecond;
    });

    this.timerService.currentBreakMinute.subscribe((value) => {
      this.breakMinute = value;

      if (this.type === 'break')
        this.minutes = this.breakMinute;
    });

    this.timerService.currentBreakSecond.subscribe((value) => {
      this.breakSecond = value;

      if (this.type === 'break')
        this.seconds = this.breakSecond;
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
    this.switchStateEvent.emit(value);
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
    }, 1000); 
  }

  setTimerOff(): void {
    clearInterval(this.interval);
  }

  setSessionTimer(): void {
    this.minutes = this.sessionMinute;
    this.seconds = this.sessionSecond;
    this.setTimerType('session');
  }

  setBreakTimer(): void {
    this.minutes = this.breakMinute;
    this.seconds = this.breakSecond;
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
    this.setTimerType('session');
    this.setSessionTimer();
  }

}
