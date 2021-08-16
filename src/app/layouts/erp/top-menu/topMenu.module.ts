 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { TopMenuComponent} from './top-menu.component';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    ComponentModule
  ],
  declarations: [TopMenuComponent]
})
export class TopMenuModule {}
