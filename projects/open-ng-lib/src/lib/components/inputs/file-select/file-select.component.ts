import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'onl-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.scss']
})
export class OpenNgLibFileSelectComponent {
  @Input() showSelectFileIcon: boolean = true;
  @Input() selectFileIconClasses: string = 'fa fa-fw fa-file';
  @Input() selectFileLabel: string = 'Select';

  @Input() fileNamePlaceholder: string = 'File Name';
  @Input() canSetFileName: boolean = true;

  @Input() showUploadFileIcon: boolean = true;
  @Input() uploadFileIconClasses: string = 'fa fa-fw fa-upload';
  @Input() uploadFileLabel: string = 'Upload';

  @Input() showClearFileIcon: boolean = true;
  @Input() clearFileIconClasses: string = 'fa fa-fw fa-eraser';
  @Input() clearFileLabel: string = 'Clear';

  @Output() fileUploadClicked: EventEmitter = new EventEmitter();

  fileName?: string;

  private _file?: File;

  get file(): File | undefined {
    return this._file;
  }

  get fileSelected(): boolean {
    return !!this.file;
  }

  get canUploadFile(): boolean {
    return this.fileSelected && !!this.fileName;
  }

  selectFile(event: any) {
    this._file = event.target.files[0];
  }

  uploadFile() {
    if (!this.canUploadFile) {
      return;
    }
    this.fileUploadClicked.emit(this.fileName, this.file);
  }

  clear() {
    this.fileName = undefined;
    this._file = undefined;
  }
}
