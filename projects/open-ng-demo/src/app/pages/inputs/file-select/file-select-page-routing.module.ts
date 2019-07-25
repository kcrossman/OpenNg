import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileSelectPageComponent } from './file-select-page.component';

const routes: Routes = [
  {
    path: '',
    component: FileSelectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileSelectPageRoutingModule { }
