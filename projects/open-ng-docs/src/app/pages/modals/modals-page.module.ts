import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenNgLibModule } from 'open-ng-lib';

import { ModalsPageRoutingModule } from './modals-page-routing.module';
import { ModalsPageComponent } from './modals-page.component';

@NgModule({
  imports: [CommonModule, ModalsPageRoutingModule, OpenNgLibModule],
  declarations: [ModalsPageComponent],
  providers: []
})
export class ModalsPageModule { }
