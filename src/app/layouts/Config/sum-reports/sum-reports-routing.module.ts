import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumReportsPage } from './sum-reports.page';

const routes: Routes = [
  {
    path: '',
    component: SumReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumReportsPageRoutingModule {}
