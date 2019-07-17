import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OpenNgLoadingService {
  private _loading: boolean = false;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get loading(): boolean {
    return this._loading;
  }

  set loading(loading: boolean) {
    this._loading = loading;
    this.loading$.next(loading);
  }
}
