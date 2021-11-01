import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReglespublicitairesComponent } from './reglespublicitaires.component';

const routes: Routes = [
  {
    path: '',
    component: ReglespublicitairesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReglesPubPageRoutingModule {}
