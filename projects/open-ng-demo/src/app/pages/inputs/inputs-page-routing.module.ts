import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputsPageComponent } from './inputs-page.component';

const routes: Routes = [
  {
    path: 'file-select',
    loadChildren: () =>
      import('./file-select/file-select-page.module').then(
        m => m.FileSelectPageModule
      )
  },
  {
    path: '',
    component: InputsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsPageRoutingModule {}
