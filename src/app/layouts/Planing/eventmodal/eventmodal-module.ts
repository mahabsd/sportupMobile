import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgCalendarModule  } from 'ionic2-calendar';
import { EventmodalComponent } from './eventmodal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule
  ],
  declarations: [EventmodalComponent]
})
export class CalendarModalPageModule {}
