import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertMaterialModalPage } from './insert-material-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InsertMaterialModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertMaterialModalPageRoutingModule {}
