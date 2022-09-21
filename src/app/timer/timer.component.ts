import { Component, OnInit, Input } from '@angular/core';

import { TimerDisplayPipe } from '../pipe/timer-display.pipe';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() minutes: number;
  seconds: number = 0;
  state: 'start' | 'stop' = 'stop';

  constructor() { }

  ngOnInit(): void {

  }

}
