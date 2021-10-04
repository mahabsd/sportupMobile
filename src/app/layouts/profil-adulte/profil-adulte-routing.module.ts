import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilAdultePage } from './profil-adulte.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilAdultePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilAdultePageRoutingModule {}
