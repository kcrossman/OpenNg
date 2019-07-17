import { Directive, Input } from '@angular/core';

import { ignoredKeys } from './ignored-keys';

@Directive({
  selector: '[onl-allow]',
  host: {
    '(keydown)': 'onKeyDown($event)'
  }
})
export class OpenNgAllowFilterDirective {
  private _allowRegex: RegExp;

  @Input('ong-allow') set allow(allowRegex: string) {
    this._allowRegex = new RegExp(allowRegex);
  }

  onKeyDown(event: any) {
    if (ignoredKeys.some(k => k === event.code)) {
      return true;
    }

    const entered = event.key;
    if (!this._allowRegex.test(entered)) {
      return false;
    }

    return true;
  }
}
