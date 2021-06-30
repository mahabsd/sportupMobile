import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertAdherentModalPageRoutingModule } from './insert-adherent-modal-routing.module';

import { InsertAdherentModalPage } from './insert-adherent-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertAdherentModalPageRoutingModule
  ],
  declarations: [InsertAdherentModalPage]
})
export class InsertAdherentModalPageModule {}
