import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninformationPage } from './signinformation.page';

const routes: Routes = [
  {
    path: '',
    component: SigninformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninformationPageRoutingModule {}
