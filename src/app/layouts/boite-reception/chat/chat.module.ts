import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { FilterChatPipe } from './filter-chat.pipe';
import { ComponentModule } from 'src/app/component/component.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    ComponentModule,
    Ng2SearchPipeModule
  ],
  declarations: [ChatPage, FilterChatPipe]
})
export class ChatPageModule {}
