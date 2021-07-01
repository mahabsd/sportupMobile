import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmInscriptionPage } from './confirminscription.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmInscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmInscriptionPageRoutingModule {}
