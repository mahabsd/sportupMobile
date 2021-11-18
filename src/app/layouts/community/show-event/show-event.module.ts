import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowEventPageRoutingModule } from './show-event-routing.module';

import { ShowEventPage } from './show-event.page';
import { ComponentModule } from '../../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowEventPageRoutingModule,
    ComponentModule
  ],
  declarations: [ShowEventPage]
})
export class ShowEventPageModule {}
