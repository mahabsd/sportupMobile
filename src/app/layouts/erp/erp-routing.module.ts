import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErpPage } from './erp.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home-erp',
        loadChildren: () => import('./home-erp/home-erp.module').then(m => m.HomeErpPageModule)
      },
      {
        path: 'gestion-material',
        loadChildren: () => import('./gestion-material/gestion-material.module').then(m => m.GestionMaterialPageModule)
      },
      {
        path: 'gestion-effectif',
        loadChildren: () => import('./gestion-effectif/gestion-effectif.module').then(m => m.GestionEffectifPageModule)
      },
      {
        path: 'gestion-espace',
        loadChildren: () => import('./gestion-espace/gestion-espace.module').then(m => m.GestionEspacePageModule)
      },
      {
        path: 'gestion-adherent',
        loadChildren: () => import('./gestion-adherent/gestion-adherent.module').then(m => m.GestionAdherentPageModule)
      },
      {
        path: 'gestion-vente',
        loadChildren: () => import('./gestion-vente/gestion-vente.module').then(m => m.GestionVentePageModule)
      },
      {
        path: 'gestion-facturation',
        loadChildren: () => import('./gestion-facturation/gestion-facturation.module').then(m => m.GestionFacturationPageModule)
      },
      {
        path: 'gestion-last-effectif',
        loadChildren: () => import('./gestion-last-effectif/gestion-last-effectif.module').then(m => m.GestionLastEffectifPageModule)
      },
      {
        path: 'erp-space',
        loadChildren: () => import('./erp-space/erp-space.module').then(m => m.ErpSpacePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErpPageRoutingModule { }
