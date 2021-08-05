import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsKidsPage } from './comments-kids.page';

const routes: Routes = [
  {
    path: '',
    component: CommentsKidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsKidsPageRoutingModule {}
