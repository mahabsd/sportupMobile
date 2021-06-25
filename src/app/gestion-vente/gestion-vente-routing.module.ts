import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionVentePage } from './gestion-vente.page';

const routes: Routes = [
  {
    path: '',
    component: GestionVentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionVentePageRoutingModule {}
