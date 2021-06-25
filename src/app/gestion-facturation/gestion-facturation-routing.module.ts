import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionFacturationPage } from './gestion-facturation.page';

const routes: Routes = [
  {
    path: '',
    component: GestionFacturationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionFacturationPageRoutingModule {}
