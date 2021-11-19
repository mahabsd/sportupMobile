import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'reactions',
    loadChildren: () => import('./reactions/reactions.module').then( m => m.ReactionsPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
