import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertLastEffectifModalPage } from './insert-last-effectif-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InsertLastEffectifModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertLastEffectifModalPageRoutingModule {}
