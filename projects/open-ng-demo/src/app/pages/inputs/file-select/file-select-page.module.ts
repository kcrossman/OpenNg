import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenNgLibModule } from 'open-ng-lib';

import { FileSelectPageRoutingModule } from './file-select-page-routing.module';
import { FileSelectPageComponent } from './file-select-page.component';

@NgModule({
  imports: [CommonModule, FileSelectPageRoutingModule, OpenNgLibModule],
  declarations: [FileSelectPageComponent],
  providers: []
})
export class FileSelectPageModule {}
