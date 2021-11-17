import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPagesPage } from './show-pages.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPagesPageRoutingModule {}
