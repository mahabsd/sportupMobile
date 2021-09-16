import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachpubPage } from './coachpub.page';

const routes: Routes = [
  {
    path: '',
    component: CoachpubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachpubPageRoutingModule {}
