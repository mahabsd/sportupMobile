import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalShearePageRoutingModule } from './modal-sheare-routing.module';

import { ModalShearePage } from './modal-sheare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalShearePageRoutingModule
  ],
  declarations: [ModalShearePage]
})
export class ModalShearePageModule {}
