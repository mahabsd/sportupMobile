import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatKidsPageModule } from '../chat-kids/chat-kids.module';
import { IonicModule } from '@ionic/angular';

import { BoiteReceptionPageRoutingModule } from './boite-reception-routing.module';

import { BoiteReceptionPage } from './boite-reception.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoiteReceptionPageRoutingModule,
    ComponentModule,
    ChatKidsPageModule
  ],
  declarations: [BoiteReceptionPage]
})
export class BoiteReceptionPageModule { }
