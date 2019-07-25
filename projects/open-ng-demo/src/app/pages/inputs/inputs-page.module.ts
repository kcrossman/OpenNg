import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenNgLibModule } from 'open-ng-lib';

import { InputsPageRoutingModule } from './inputs-page-routing.module';
import { InputsPageComponent } from './inputs-page.component';

@NgModule({
  imports: [CommonModule, InputsPageRoutingModule, OpenNgLibModule],
  declarations: [InputsPageComponent],
  providers: []
})
export class InputsPageModule { }
