import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoostPubPage } from './boost-pub.page';

const routes: Routes = [
  {
    path: '',
    component: BoostPubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoostPubPageRoutingModule {}
