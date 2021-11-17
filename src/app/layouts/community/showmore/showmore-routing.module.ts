import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowmorePage } from './showmore.page';

const routes: Routes = [
  {
    path: '',
    component: ShowmorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowmorePageRoutingModule {}
