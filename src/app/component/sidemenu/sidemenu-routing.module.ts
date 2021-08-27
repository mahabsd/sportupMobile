import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';
import { AuthGuard } from '../../Shared/Guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthGuard]
      },
      {
        path: 'home',
        loadChildren: () => import('../../layouts/home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard]
      },
      {
        path: 'layouts',
        loadChildren: () => import('../../layouts/layouts.module').then(m => m.LayoutsModule), canActivate: [AuthGuard]
      },
    ]
  }, {
    path: '',
    redirectTo: 'menu/tabs/home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule { }
