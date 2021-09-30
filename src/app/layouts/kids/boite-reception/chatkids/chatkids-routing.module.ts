import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatkidsPage } from './chatkids.page';

const routes: Routes = [
  {
    path: '',
    component: ChatkidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatkidsPageRoutingModule {}
