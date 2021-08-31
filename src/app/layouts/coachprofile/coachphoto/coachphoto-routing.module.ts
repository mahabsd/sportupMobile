import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachphotoPage } from './coachphoto.page';

const routes: Routes = [
  {
    path: '',
    component: CoachphotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachphotoPageRoutingModule {}
