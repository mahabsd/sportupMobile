import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiqueuserPageRoutingModule } from './statistiqueuser-routing.module';

import { StatistiqueuserPage } from './statistiqueuser.page';
import { LineChComponent } from '../line-ch/line-ch.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatistiqueuserPageRoutingModule,
  ],
  declarations: [StatistiqueuserPage, LineChComponent],
  exports: [LineChComponent],
})
export class StatistiqueuserPageModule { }
