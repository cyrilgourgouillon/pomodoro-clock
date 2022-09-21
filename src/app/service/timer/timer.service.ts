import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Timer } from 'src/app/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private sessionMinute = new BehaviorSubject<number>(25);
  currentSessionMinute = this.sessionMinute.asObservable();
  private sessionSecond = new BehaviorSubject<number>(0);
  currentSessionSecond = this.sessionSecond.asObservable();

  private breakMinute = new BehaviorSubject<number>(5);
  currentBreakMinute = this.breakMinute.asObservable();
  private breakSecond = new BehaviorSubject<number>(0);
  currentBreakSecond = this.breakSecond.asObservable();

  getDefaultSessionMinute() {
    return this.sessionMinute.value;
  }

  getDefaultBreakMinute() {
    return this.breakMinute.value;
  }

  setSessionMinute(minute: Timer["minute"]) {
    this.sessionMinute.next(minute);
  }

  setSessionSecond(second: Timer["second"]) {
    this.sessionSecond.next(second);
  }

  setBreakMinute(minute: Timer["minute"]) {
    this.breakMinute.next(minute);
  }

  setBreakSecond(second: Timer["second"]) {
    this.breakSecond.next(second);
  }

  constructor() { }

}
