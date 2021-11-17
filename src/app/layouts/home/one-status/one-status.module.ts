import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneStatusPageRoutingModule } from './one-status-routing.module';

import { OneStatusPage } from './one-status.page';
import { ComponentModule } from '../../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneStatusPageRoutingModule,
    ComponentModule
  ],
  declarations: [OneStatusPage]
})
export class OneStatusPageModule {}
