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
    path: 'show-pages',
    loadChildren: () => import('./show-pages/show-pages.module').then( m => m.ShowPagesPageModule)
  },
  {
    path: 'show-event',
    loadChildren: () => import('./show-event/show-event.module').then( m => m.ShowEventPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityPageRoutingModule {}
