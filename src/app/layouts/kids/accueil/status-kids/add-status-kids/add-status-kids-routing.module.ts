import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStatusKidsPage } from './add-status-kids.page';

const routes: Routes = [
  {
    path: '',
    component: AddStatusKidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStatusKidsPageRoutingModule {}
