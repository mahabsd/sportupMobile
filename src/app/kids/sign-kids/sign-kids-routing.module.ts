import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignKidsPage } from './sign-kids.page';

const routes: Routes = [
  {
    path: '',
    component: SignKidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignKidsPageRoutingModule {}
