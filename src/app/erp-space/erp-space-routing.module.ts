import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErpSpacePage } from './erp-space.page';

const routes: Routes = [
  {
    path: '',
    component: ErpSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErpSpacePageRoutingModule {}
