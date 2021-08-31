import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatKidsPageRoutingModule } from './chat-kids-routing.module';

import { ChatKidsPage } from './chat-kids.page';
import { ComponentModule } from 'src/app/component/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatKidsPageRoutingModule,
    ComponentModule
  ],
  declarations: [ChatKidsPage]
})
export class ChatKidsPageModule {}
