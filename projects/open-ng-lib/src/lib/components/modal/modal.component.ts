import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import { OpenNgBackdropService } from '../../services/backdrop.service';

@Component({
  selector: 'onl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class OpenNgModalComponent implements AfterViewInit {
  @Input() canMaximize: boolean = true;
  @Input() canDismiss: boolean = true;
  @Input() canClose: boolean = true;
  @Input() visibleWhenBusy: boolean = false;

  @Output() opened: EventEmitter<null> = new EventEmitter();
  @Output() closed: EventEmitter<null> = new EventEmitter();
  @Output() dismissed: EventEmitter<null> = new EventEmitter();

  maximized: boolean = false;

  private _visible: boolean = false;

  constructor(
    private element: ElementRef,
    private backdropService: OpenNgBackdropService
  ) {
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }

  get visible(): boolean {
    return this._visible;
  }

  open() {
    this._visible = true;
    this.opened.emit();
  }

  dismiss() {
    this._visible = false;
    this.dismissed.emit();
  }

  close() {
    this._visible = false;
    this.closed.emit();
    this.element
      .nativeElement
      .parentElement
      .removeChild(this.element.nativeElement);
  }

  maximize() {
    if (this.canMaximize) {
      this.maximized = !this.maximized;
    }
  }
}
