import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatKidsPage } from './chat-kids.page';

const routes: Routes = [
  {
    path: '',
    component: ChatKidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatKidsPageRoutingModule {}
