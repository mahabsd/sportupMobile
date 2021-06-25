import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionLastEffectifPage } from './gestion-last-effectif.page';

const routes: Routes = [
  {
    path: '',
    component: GestionLastEffectifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionLastEffectifPageRoutingModule {}
