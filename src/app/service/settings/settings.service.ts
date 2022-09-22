import { Injectable } from '@angular/core';
import { SettingsState } from 'src/app/type/SettingsState';
import { TimerService } from '../timer/timer.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public settingsState : SettingsState = {
    breakMinuteSettings : 5,
    breakSecondSettings : 0,
    sessionMinuteSettings : 25,
    sessionSecondSettings : 0,
  };

  constructor() {
  }
}
