import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanPage } from './scan.page';

const routes: Routes = [
  {
    path: '',
    component: ScanPage
  },
  {
    path: 'mesures',
    loadChildren: () => import('./mesures/mesures.module').then( m => m.MesuresPageModule)
  },
  {
    path: 'affichage',
    loadChildren: () => import('./affichage/affichage.module').then( m => m.AffichagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanPageRoutingModule {}
