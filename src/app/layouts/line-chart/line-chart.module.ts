import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineChartPageRoutingModule } from './line-chart-routing.module';

import { LineChartComponent } from './line-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineChartPageRoutingModule
  ],
  declarations: [LineChartComponent]
})
export class LineChartPageModule {}
