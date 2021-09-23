import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
import { StatusKidsComponent } from './status-kids/status-kids.component';
import { ComponentModule } from '../../../component/component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule,
    ComponentModule
  ],
  declarations: [AccueilPage, StatusKidsComponent]
})
export class AccueilPageModule { }
