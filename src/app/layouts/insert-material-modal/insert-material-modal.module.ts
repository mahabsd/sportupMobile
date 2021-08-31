import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertMaterialModalPageRoutingModule } from './insert-material-modal-routing.module';

import { InsertMaterialModalPage } from './insert-material-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertMaterialModalPageRoutingModule
  ],
  declarations: [InsertMaterialModalPage]
})
export class InsertMaterialModalPageModule {}
