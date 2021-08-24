import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HobbiesPage } from './hobbies.page';

const routes: Routes = [
  {
    path: '',
    component: HobbiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HobbiesPageRoutingModule {}
