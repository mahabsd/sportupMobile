import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolitiquesUtilisationPage } from './politiques-utilisation.page';

const routes: Routes = [
  {
    path: '',
    component: PolitiquesUtilisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolitiquesUtilisationPageRoutingModule {}
