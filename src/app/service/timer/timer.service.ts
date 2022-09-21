import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private minute = new BehaviorSubject<number>(25);
  currentMinute = this.minute.asObservable();
  private second = new BehaviorSubject<number>(4);
  currentSecond = this.second.asObservable();

  setMinute(minute: number) {
    this.minute.next(minute);
  }

  setSecond(second: number) {
    this.second.next(second);
  }

  constructor() { }

}
