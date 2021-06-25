import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertEffectifModalPageRoutingModule } from './insert-effectif-modal-routing.module';

import { InsertEffectifModalPage } from './insert-effectif-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertEffectifModalPageRoutingModule
  ],
  declarations: [InsertEffectifModalPage]
})
export class InsertEffectifModalPageModule {}
