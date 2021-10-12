import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiqueuserPageRoutingModule } from './statistiqueuser-routing.module';

import { StatistiqueuserPage } from './statistiqueuser.page';
import { LineChComponent } from '../line-ch/line-ch.component';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatistiqueuserPageRoutingModule,
    ComponentModule
  ],
  declarations: [StatistiqueuserPage, LineChComponent],
  exports: [LineChComponent],
})
export class StatistiqueuserPageModule { }
