import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatPageRoutingModule } from './stat-routing.module';

import { StatPage } from './stat.page';
import { ComponentModule } from '../../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatPageRoutingModule,
    ComponentModule
  ],
  declarations: [StatPage]
})
export class StatPageModule {}
