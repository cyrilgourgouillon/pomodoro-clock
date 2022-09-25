import { Injectable } from '@angular/core';
import { State, TimerState, Type } from '../../type/TimerState';

import { defaultTimerValues } from 'src/app/enum/defaultValue';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public timerState: TimerState = {
    sessionMinute : defaultTimerValues.DEFAULT_SESSION_MINUTES,
    sessionSecond : defaultTimerValues.DEFAULT_SESSION_SECONDS,

    breakMinute : defaultTimerValues.DEFAULT_BREAK_MINUTES,
    breakSecond : defaultTimerValues.DEFAULT_BREAK_SECONDS,

    state : 'stop',
    type : 'session',

    sessionCounter: 0,
  };

  constructor() { }

  setState(value: State): void {
    this.timerState.state = value;
  }

  setTimerType(value: Type): void {
    this.timerState.type = value;
  }

  setBreakTimerValues(minute: TimerState["breakMinute"], second: TimerState["breakSecond"]): void {
    this.timerState.breakMinute = minute;
    this.timerState.breakSecond = second;
  }

  setSessionTimerValues(minute: TimerState["sessionMinute"], second: TimerState["sessionSecond"]): void {
    this.timerState.sessionMinute = minute;
    this.timerState.sessionSecond = second;
  }

  incrementSessionCounter() {
    this.timerState.sessionCounter++;
  }
}
