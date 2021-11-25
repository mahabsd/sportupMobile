import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedPOSTSPage } from './saved-posts.page';

const routes: Routes = [
  {
    path: '',
    component: SavedPOSTSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedPOSTSPageRoutingModule {}
