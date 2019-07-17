import {
  Component,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

import { OpenNgModalInstance } from './modal-instance';
import { OpenNgBackdropService } from '../../services/backdrop.service';

@Component({
  selector: 'onl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    role: 'dialog',
    tabindex: '-1',
    '(click)': 'onClick($event)',
    '(keydown.escape)': 'onEscape($event)',
    '(keydown.tab)': 'onTab($event)'
  }
})
export class OpenNgModalComponent implements OnDestroy {
  @Input() set visibleWhenBusy(value: boolean) {
    this.instance.visibleWhenBusy = value;
  }

  @Output() onClose: EventEmitter<any> = new EventEmitter(false);
  @Output() onDismiss: EventEmitter<any> = new EventEmitter(false);
  @Output() onOpen: EventEmitter<any> = new EventEmitter(false);

  instance: OpenNgModalInstance;

  constructor(
    private element: ElementRef,
    private backdropService: OpenNgBackdropService
  ) {
    this.instance = new OpenNgModalInstance(element, backdropService);
  }

  ngOnDestroy() {
    return this.instance && this.instance.destroy();
  }

  get visible(): boolean {
    return this.instance.visible;
  }

  set visible(value: boolean) {
    this.instance.visible = value;
  }

  routerCanDeactivate(): any {
    return this.ngOnDestroy();
  }

  open() {
    this.instance.open();
    this.onOpen.emit(this.instance.result);
  }

  close() {
    this.instance.close();
    this.onClose.emit(this.instance.result);
  }

  dismiss() {
    this.instance.dismiss();
    this.onDismiss.emit(this.instance.result);
  }

  onClick(event: any): void {
    if (this.visible) {
      const target: Element = event.target as Element;
      const hasModal = this.checkElementTreeForModalClass(target);
      if (hasModal) {
        this.dismiss();
      }
    }
  }

  onEscape(event: KeyboardEvent): void {
    if (this.visible) {
      this.dismiss();
    }
  }

  onTab(event: KeyboardEvent) {
    event.stopPropagation();
  }

  private checkElementTreeForModalClass(
    target: Element,
    root: boolean = true
  ): boolean {
    if (!target) {
      return false;
    }
    for (const child in target.childNodes) {
      if (target.childNodes.hasOwnProperty(child)) {
        if (
          !root &&
          target.classList &&
          target.classList.contains('modal-dialog')
        ) {
          return true;
        }
        const childTarget: Element = target.children[child] as Element;
        return this.checkElementTreeForModalClass(childTarget, false);
      }
    }
    return false;
  }
}
