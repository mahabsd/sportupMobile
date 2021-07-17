import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriquepersonnelPage } from './historiquepersonnel.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriquepersonnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriquepersonnelPageRoutingModule {}
