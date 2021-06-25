import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEffectifPage } from './gestion-effectif.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEffectifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEffectifPageRoutingModule {}
