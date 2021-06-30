import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertVenteModalPage } from './insert-vente-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InsertVenteModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertVenteModalPageRoutingModule {}
