import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalShearePage } from './modal-sheare.page';

const routes: Routes = [
  {
    path: '',
    component: ModalShearePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalShearePageRoutingModule {}
