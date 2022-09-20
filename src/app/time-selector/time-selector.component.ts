import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.css']
})
export class TimeSelectorComponent implements OnInit {
  @Input() timeSelectorName!: string;
  @Input() minValue!: number;
  @Input() maxValue!: number;
  value: number;

  constructor() { }

  ngOnInit(): void {
    this.value = this.maxValue;
  }

  put(amount: number): void {
    if (this.value + amount <= this.maxValue && this.value + amount > this.minValue) {
      this.value += amount;
    }
  }

}
