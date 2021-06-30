import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertVenteModalPageRoutingModule } from './insert-vente-modal-routing.module';

import { InsertVenteModalPage } from './insert-vente-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertVenteModalPageRoutingModule
  ],
  declarations: [InsertVenteModalPage]
})
export class InsertVenteModalPageModule {}
