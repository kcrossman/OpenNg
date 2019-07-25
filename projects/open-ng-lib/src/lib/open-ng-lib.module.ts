import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  OpenNgBackdropComponent,
  OpenNgLibFileSelectComponent,
  OpenNgModalComponent
} from './components';
import {
  OpenNgAllowFilterDirective,
  OpenNgDisallowFilterDirective
} from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    // Directives:
    OpenNgAllowFilterDirective,
    OpenNgDisallowFilterDirective,
    // Components:
    OpenNgBackdropComponent,
    OpenNgLibFileSelectComponent,
    OpenNgModalComponent
  ],
  exports: [
    // Directives:
    OpenNgAllowFilterDirective,
    OpenNgDisallowFilterDirective,
    // Components:
    OpenNgBackdropComponent,
    OpenNgLibFileSelectComponent,
    OpenNgModalComponent
  ]
})
export class OpenNgLibModule { }
