import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheFriendsPage } from './recherche-friends.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheFriendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheFriendsPageRoutingModule {}
