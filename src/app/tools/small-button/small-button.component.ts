import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-small-button',
  template: `
    <button class="small-button">
      <ng-content></ng-content>
    </button>
    `,
  styles: [`
    .small-button {
      height: 2em;
      border: none;
      border-radius: 3px;
      background: none;
      color: white;
      font-weight: bolder;
    }
  `]
})
export class SmallButtonComponent {

}
