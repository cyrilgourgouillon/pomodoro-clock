import { Injectable } from '@angular/core';
import { TimerState } from '../../type/TimerState';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public timerState: TimerState = {
    sessionMinute : 25,
    sessionSecond : 0,

    breakMinute : 5,
    breakSecond : 0,

    state : 'stop',
    type : 'session'
  };

  constructor() { }
}
