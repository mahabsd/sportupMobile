import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertEffectifModalPage } from './insert-effectif-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InsertEffectifModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertEffectifModalPageRoutingModule {}
