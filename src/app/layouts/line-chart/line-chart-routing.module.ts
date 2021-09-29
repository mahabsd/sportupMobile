import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineChartComponent } from './line-chart.page';

const routes: Routes = [
  {
    path: '',
    component: LineChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineChartPageRoutingModule {}
