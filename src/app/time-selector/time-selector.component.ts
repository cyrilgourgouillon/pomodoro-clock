import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from '../service/settings/settings.service';

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

  constructor(private timerService: TimerService, private settingsService: SettingsService) { }

  ngOnInit(): void {
    if (this.timeSelectorName === 'Break') {
      this.value = this.timerService.timerState.breakMinute;
    } else if (this.timeSelectorName === 'Session') {
      this.value = this.timerService.timerState.sessionMinute;
    }
  }

  put(amount: number): void {
    if (this.value + amount <= this.maxValue && this.value + amount > this.minValue) {
      this.value += amount;

      if (this.timeSelectorName === 'Session') {
        this.settingsService.settingsState.sessionMinuteSettings = this.value;
        this.settingsService.settingsState.sessionSecondSettings = 0;

        this.timerService.timerState.sessionMinute = this.value;
        this.timerService.timerState.sessionSecond = 0;
      } else if (this.timeSelectorName === 'Break') {
        this.settingsService.settingsState.breakMinuteSettings = this.value;
        this.settingsService.settingsState.breakSecondSettings = 0;

        this.timerService.timerState.breakMinute = this.value;
        this.timerService.timerState.breakSecond = 0;
      }
    }
  }

}
