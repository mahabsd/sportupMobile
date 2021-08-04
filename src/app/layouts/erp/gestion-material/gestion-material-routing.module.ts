import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionMaterialPage } from './gestion-material.page';

const routes: Routes = [
  {
    path: '',
    component: GestionMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionMaterialPageRoutingModule {}
