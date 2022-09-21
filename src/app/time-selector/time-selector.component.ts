import { Component, Input, OnInit } from '@angular/core';

import { TimerService } from '../service/timer/timer.service';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.css']
})
export class TimeSelectorComponent implements OnInit {
  @Input() timeSelectorName!: 'Break' | 'Session';
  @Input() minValue!: number;
  @Input() maxValue!: number;
  value: number;

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    if (this.timeSelectorName === 'Break') {
      this.value = this.timerService.getDefaultBreakMinute();
    } else if (this.timeSelectorName === 'Session') {
      this.value = this.timerService.getDefaultSessionMinute();
    }
  }

  put(amount: number): void {
    if (this.value + amount <= this.maxValue && this.value + amount > this.minValue) {
      this.value += amount;

      if (this.timeSelectorName === 'Session') {
        this.timerService.setSessionMinute(this.value);
        this.timerService.setSessionSecond(0);
      } else if (this.timeSelectorName === 'Break') {
        this.timerService.setBreakMinute(this.value);
        this.timerService.setBreakSecond(0);
      }
    }
  }

}
