import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/help/help-page.module').then(m => m.HelpPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () =>
      import('./pages/inputs/inputs-page.module').then(m => m.InputsPageModule)
  },
  {
    path: 'modals',
    loadChildren: () =>
      import('./pages/modals/modals-page.module').then(m => m.ModalsPageModule)
  },
  {
    path: '',
    redirectTo: 'help',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
