import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriquepersonnelPageRoutingModule } from './historiquepersonnel-routing.module';

import { HistoriquepersonnelPage } from './historiquepersonnel.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriquepersonnelPageRoutingModule,
    ComponentModule
  ],
  declarations: [HistoriquepersonnelPage]
})
export class HistoriquepersonnelPageModule { }
