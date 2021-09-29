import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiqueuserPageRoutingModule } from './statistiqueuser-routing.module';

import { StatistiqueuserPage } from './statistiqueuser.page';
import {LineChartPageModule} from '../line-chart/line-chart.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatistiqueuserPageRoutingModule,LineChartPageModule
  ],
  declarations: [StatistiqueuserPage]
})
export class StatistiqueuserPageModule {}
