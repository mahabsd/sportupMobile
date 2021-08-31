import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriqueerpPageRoutingModule } from './historiqueerp-routing.module';

import { HistoriqueerpPage } from './historiqueerp.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriqueerpPageRoutingModule,
    ComponentModule
  ],
  declarations: [HistoriqueerpPage]
})
export class HistoriqueerpPageModule {}
