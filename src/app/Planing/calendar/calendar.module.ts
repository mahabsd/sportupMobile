import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarModalPageModule } from '../calendar-modal/calendar-modal.module';
import localeFr from '@angular/common/locales/fr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    CalendarModalPageModule
  ],
  declarations: [CalendarPage],
  providers: [{ provide: LOCALE_ID, useValue: 'en-GB' }]
})
export class CalendarPageModule {}
