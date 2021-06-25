import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertEspaceModalPage } from './insert-espace-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InsertEspaceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertEspaceModalPageRoutingModule {}
