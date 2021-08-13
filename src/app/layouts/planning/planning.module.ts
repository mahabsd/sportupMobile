import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModalPageModule } from '../Planing/calendar-modal/calendar-modal.module';
import { IonicModule } from '@ionic/angular';
import { CalendarModalPage } from '../Planing/calendar-modal/calendar-modal.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { PlanningPageRoutingModule } from './planning-routing.module';

import { PlanningPage } from './planning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanningPageRoutingModule,
    CalendarModalPageModule,
    NgCalendarModule,
  ],
  declarations: [PlanningPage]
})
export class PlanningPageModule {}
