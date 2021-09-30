import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoiteReceptionPage } from './boite-reception.page';

const routes: Routes = [
  {
    path: '',
    component: BoiteReceptionPage
  },
  {
    path: 'chatkids',
    loadChildren: () => import('./chatkids/chatkids.module').then( m => m.ChatkidsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoiteReceptionPageRoutingModule {}
