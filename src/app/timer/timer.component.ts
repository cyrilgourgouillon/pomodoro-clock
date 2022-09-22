import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../service/settings/settings.service';

import { TimerService } from '../service/timer/timer.service';
import { State, TimerState, Type } from '../type/TimerState';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timerState : TimerState;
  interval: any;

  constructor(private timerService: TimerService, private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.timerState = this.timerService.timerState;
  }

  changeState(value: State): void {
    if (this.timerState.state === 'start') {
      this.setTimerOff();
    }
    else if (this.timerState.state === 'stop') {
      this.setTimerOn();
    }
    this.setState(value);
  }

  setState(value: State): void {
    this.timerService.timerState.state = value;
  }

  setTimerOn(): void {
    this.interval = setInterval(() => {
      if (this.timerState.type === 'break') {
        if (this.timerState.breakSecond === 0) {
          this.timerState.breakSecond = 59;
          this.timerState.breakMinute--;
        } else {
          this.timerState.breakSecond--;
        }

        if (this.timerState.breakMinute === 0 && this.timerState.breakSecond === 0) {
          this.setSessionTimer();
          this.resetBreakTimer();
        }
      } else if (this.timerState.type === 'session') {
        if (this.timerState.sessionSecond === 0) {
          this.timerState.sessionSecond = 59;
          this.timerState.sessionMinute--;
        } else {
          this.timerState.sessionSecond--;
        }

        if (this.timerState.sessionMinute === 0 && this.timerState.sessionSecond === 0) {
          this.setBreakTimer();
          this.resetSessionTimer();
        }
      }

    }, 1000); 
  }

  setTimerOff(): void {
    clearInterval(this.interval);
  }

  setSessionTimer(): void {
    this.setTimerType('session');
  }

  setBreakTimer(): void {
    this.setTimerType('break');
  }

  resetSessionTimer(): void {
    this.timerState.sessionMinute = this.settingsService.settingsState.sessionMinuteSettings;
    this.timerState.sessionSecond = this.settingsService.settingsState.sessionSecondSettings;
  }

  resetBreakTimer(): void {
    this.timerState.breakMinute = this.settingsService.settingsState.breakMinuteSettings;
    this.timerState.breakSecond = this.settingsService.settingsState.breakSecondSettings;
  }

  setTimerType(value: Type): void {
    this.timerState.type = value;
  }

  skipTimer(): void {
    if (this.timerState.type === 'break') {
      this.setSessionTimer();
      this.resetBreakTimer();
    } else if (this.timerState.type === 'session') {
      this.setBreakTimer();
      this.resetSessionTimer();
    }
  }

  resetTimer(): void {
    this.setTimerOff();
    this.setState('stop');
    this.setTimerType('session');
    this.resetBreakTimer();
    this.resetSessionTimer();
    this.setSessionTimer();
  }

}
