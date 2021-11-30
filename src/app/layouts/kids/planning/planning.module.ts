import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanningPageRoutingModule } from './planning-routing.module';

import { PlanningPage } from './planning.page';
import { ComponentModule } from 'src/app/component/component.module';
import { WeekSlidesComponent } from './week-slides/week-slides.component';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    PlanningPageRoutingModule,
    ComponentModule
  ],
  declarations: [PlanningPage,WeekSlidesComponent]
})
export class PlanningPageModule {}
