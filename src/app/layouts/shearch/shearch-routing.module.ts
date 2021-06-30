import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShearchPage } from './shearch.page';

const routes: Routes = [
  {
    path: '',
    component: ShearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShearchPageRoutingModule {}
