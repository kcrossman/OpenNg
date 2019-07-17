import { ElementRef } from "@angular/core";

import { OpenNgBackdropService } from "../../services/backdrop.service";
import { ModalResult } from "./modal-result";

export class OpenNgModalInstance {
  result: any;

  visibleWhenBusy: boolean = false;

  private $modal: any;
  private shouldShow: boolean = false;
  private backdropShown: boolean = false;

  constructor(
    private element: ElementRef,
    private backdropService: OpenNgBackdropService
  ) {
    this.init();
  }

  get visible(): boolean {
    return (
      this.shouldShow && (this.visibleWhenBusy || !this.backdropService.busy)
    );
  }

  set visible(value: boolean) {
    this.shouldShow = value;
  }

  open() {
    this.result = ModalResult.Open;
    this.show();
  }

  close() {
    this.result = ModalResult.Close;
    this.hide();
  }

  dismiss() {
    this.result = ModalResult.Dismiss;
    this.hide();
  }

  destroy() {
    this.hide();
    this.$modal.parentNode.removeChild(this.$modal);
  }

  private show() {
    if (!this.backdropShown) {
      this.backdropService.show();
      this.backdropShown = true;
    }

    this.shouldShow = true;
    this.visible = true;
    this.element.nativeElement.focus();
  }

  private hide() {
    if (this.$modal && this.shouldShow) {
      if (this.backdropShown) {
        this.backdropService.hide();
        this.backdropShown = false;
      }

      this.shouldShow = false;
      this.visible = false;
    }
  }

  init() {
    this.$modal = this.element.nativeElement;
    document.body.appendChild(this.$modal);
  }
}
