import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityPage } from './community.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'show-event',
    loadChildren: () => import('./show-event/show-event.module').then( m => m.ShowEventPageModule)
  },
  {
    path: 'show-page',
    loadChildren: () => import('./show-page/show-page.module').then( m => m.ShowPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityPageRoutingModule {}
