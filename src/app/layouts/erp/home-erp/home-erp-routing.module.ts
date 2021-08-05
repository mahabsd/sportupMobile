import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeErpPage } from './home-erp.page';

const routes: Routes = [
  {
    path: '',
    component: HomeErpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeErpPageRoutingModule {}
