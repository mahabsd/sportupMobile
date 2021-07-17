import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatistiqueuserPage } from './statistiqueuser.page';

const routes: Routes = [
  {
    path: '',
    component: StatistiqueuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatistiqueuserPageRoutingModule {}
