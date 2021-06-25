import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAdherentPage } from './gestion-adherent.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAdherentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAdherentPageRoutingModule {}
