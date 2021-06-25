import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertFacteurModalPage } from './insert-facteur-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InsertFacteurModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertFacteurModalPageRoutingModule {}
