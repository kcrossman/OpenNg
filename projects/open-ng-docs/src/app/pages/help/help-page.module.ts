import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpPageRoutingModule } from './help-page-routing.module';
import { HelpPageComponent } from './help-page.component';

@NgModule({
  imports: [CommonModule, HelpPageRoutingModule],
  declarations: [HelpPageComponent],
  providers: []
})
export class HelpPageModule { }
