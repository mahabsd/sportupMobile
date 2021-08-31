import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginErpPage } from './login-erp.page';

const routes: Routes = [
  {
    path: '',
    component: LoginErpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginErpPageRoutingModule {}