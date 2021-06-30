import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriqueerpPage } from './historiqueerp.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriqueerpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriqueerpPageRoutingModule {}
