import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertAdherentModalPage } from './insert-adherent-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InsertAdherentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertAdherentModalPageRoutingModule {}
