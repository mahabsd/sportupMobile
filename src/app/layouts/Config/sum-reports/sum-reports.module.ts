import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumReportsPageRoutingModule } from './sum-reports-routing.module';

import { SumReportsPage } from './sum-reports.page';
import { ComponentModule } from '../../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumReportsPageRoutingModule,
    ComponentModule
  ],
  declarations: [SumReportsPage]
})
export class SumReportsPageModule { }
