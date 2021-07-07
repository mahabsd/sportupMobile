import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';
import { AuthGuard } from '../../shared/Guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [
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
    redirectTo: 'menu/home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule { }
