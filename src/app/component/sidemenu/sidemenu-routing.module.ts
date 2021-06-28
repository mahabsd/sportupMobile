import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';
import { AuthGuard } from '../../shared/Guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./../../home/home.module').then(m => m.HomePageModule),canActivate:[AuthGuard]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule {}
