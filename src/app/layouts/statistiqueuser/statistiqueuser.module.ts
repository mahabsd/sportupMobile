import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiqueuserPageRoutingModule } from './statistiqueuser-routing.module';

import { StatistiqueuserPage } from './statistiqueuser.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatistiqueuserPageRoutingModule,
    ComponentModule
  ],
  declarations: [StatistiqueuserPage],
  exports: [],
})
export class StatistiqueuserPageModule { }
