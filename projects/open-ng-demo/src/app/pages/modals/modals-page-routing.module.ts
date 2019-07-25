import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsPageComponent } from './modals-page.component';

const routes: Routes = [
  {
    path: '',
    component: ModalsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalsPageRoutingModule { }
