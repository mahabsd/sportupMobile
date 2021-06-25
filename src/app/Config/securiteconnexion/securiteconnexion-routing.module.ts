import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecuriteconnexionPage } from './securiteconnexion.page';

const routes: Routes = [
  {
    path: '',
    component: SecuriteconnexionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecuriteconnexionPageRoutingModule {}
