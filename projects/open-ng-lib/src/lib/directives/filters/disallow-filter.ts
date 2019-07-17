import { Directive, Input } from '@angular/core';

import { ignoredKeys } from './ignored-keys';

@Directive({
  selector: '[onl-disallow]',
  host: {
    '(keydown)': 'onKeyDown($event)'
  }
})
export class OpenNgDisallowFilterDirective {
  private _disallowedRegex: RegExp;

  @Input('ong-disallow') set disallow(disallowedRegex: string) {
    this._disallowedRegex = new RegExp(disallowedRegex);
  }

  onKeyDown(event: any) {
    if (ignoredKeys.some(k => k === event.code)) {
      return true;
    }

    const entered = event.key;
    if (this._disallowedRegex.test(entered)) {
      return false;
    }

    return true;
  }
}
