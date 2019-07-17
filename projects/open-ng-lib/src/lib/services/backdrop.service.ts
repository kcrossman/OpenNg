import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { OpenNgLoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class OpenNgBackdropService {
  visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // tslint:disable-next-line: no-inferrable-types
  private _busy: boolean = false;
  private showCount: number = 0;

  constructor(private loadingService: OpenNgLoadingService) {
    this.loadingService.loading$.subscribe(
      (loading: boolean) => (this._busy = loading)
    );
  }

  get busy(): boolean {
    return this._busy;
  }

  get visible(): boolean {
    return this.busy || this.showCount > 0;
  }

  get count(): number {
    return this.showCount;
  }

  show() {
    const wasVisible = this.visible;

    this.showCount++;

    if (!wasVisible && this.visible) {
      this.visible$.next(true);
    }
  }

  hide() {
    const wasVisible = this.visible;

    if (this.showCount > 0) {
      this.showCount--;
    }

    if (wasVisible && !this.visible) {
      this.visible$.next(false);
    }
  }
}
