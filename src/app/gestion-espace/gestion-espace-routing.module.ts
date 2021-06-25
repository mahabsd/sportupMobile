import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEspacePage } from './gestion-espace.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEspacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEspacePageRoutingModule {}
