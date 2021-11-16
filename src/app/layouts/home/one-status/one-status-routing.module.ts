import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneStatusPage } from './one-status.page';

const routes: Routes = [
  {
    path: '',
    component: OneStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneStatusPageRoutingModule {}
