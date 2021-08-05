import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
          path: '',
          loadChildren: () => import('./../../layouts/home/home.module').then(m => m.HomePageModule)
        },
        ]
      },
      {
        path: 'accueil',
        loadChildren: () => import('./../../layouts/kids/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./../../layouts/profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: 'home-erp',
        loadChildren: () => import('../../layouts/erp/home-erp/home-erp.module').then(m => m.HomeErpPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
