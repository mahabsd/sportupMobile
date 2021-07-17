import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalShearePageRoutingModule } from './modal-sheare-routing.module';

import { ModalShearePage } from './modal-sheare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalShearePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalShearePage]
})
export class ModalShearePageModule {}
