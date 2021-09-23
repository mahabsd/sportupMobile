import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitePage } from './activite.page';

const routes: Routes = [
  {
    path: '',
    component: ActivitePage
  },
  {
    path: 'add-activity',
    loadChildren: () => import('./modals/add-activity/add-activity.module').then( m => m.AddActivityPageModule)
  },
  {
    path: 'show-activity',
    loadChildren: () => import('./modals/show-activity/show-activity.module').then( m => m.ShowActivityPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitePageRoutingModule {}
