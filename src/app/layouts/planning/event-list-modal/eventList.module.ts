 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { EventListModalComponent} from './event-list-modal.component';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    ComponentModule
  ],
  declarations: [EventListModalComponent]
})
export class EventListModule {}
