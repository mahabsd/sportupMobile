import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbonnerinviteramisPage } from './abonnerinviteramis.page';

const routes: Routes = [
  {
    path: '',
    component: AbonnerinviteramisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbonnerinviteramisPageRoutingModule {}
