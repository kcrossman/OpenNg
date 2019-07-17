import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  OpenNgBackdropComponent,
  OpenNgModalComponent
} from './components';
import {
  OpenNgAllowFilterDirective,
  OpenNgDisallowFilterDirective
} from './directives';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Directives:
    OpenNgAllowFilterDirective,
    OpenNgDisallowFilterDirective,
    // Components:
    OpenNgBackdropComponent,
    OpenNgModalComponent
  ],
  exports: [
    // Directives:
    OpenNgAllowFilterDirective,
    OpenNgDisallowFilterDirective,
    // Components:
    OpenNgBackdropComponent,
    OpenNgModalComponent
  ]
})
export class OpenNgLibModule { }
