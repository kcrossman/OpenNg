import { Component } from '@angular/core';

import { OpenNgBackdropService } from '../../services/backdrop.service';

@Component({
  selector: 'onl-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  host: {
    tabindex: '-1',
    '(window:keydown)': 'preventTabbing($event)'
  }
})
export class OpenNgBackdropComponent {
  constructor(private backdropService: OpenNgBackdropService) { }

  get visible(): boolean {
    return this.backdropService.visible;
  }

  get busy(): boolean {
    return this.backdropService.busy;
  }

  preventTabbing(event: KeyboardEvent) {
    if (this.visible && event.keyCode === 9) {
      event.preventDefault();
    }
  }
}
