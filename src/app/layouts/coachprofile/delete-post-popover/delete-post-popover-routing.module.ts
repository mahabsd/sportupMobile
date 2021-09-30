import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePostPopoverPage } from './delete-post-popover.page';

const routes: Routes = [
  {
    path: '',
    component: DeletePostPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletePostPopoverPageRoutingModule {}
