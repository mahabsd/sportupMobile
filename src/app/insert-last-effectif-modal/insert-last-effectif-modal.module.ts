import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertLastEffectifModalPageRoutingModule } from './insert-last-effectif-modal-routing.module';

import { InsertLastEffectifModalPage } from './insert-last-effectif-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertLastEffectifModalPageRoutingModule
  ],
  declarations: [InsertLastEffectifModalPage]
})
export class InsertLastEffectifModalPageModule {}
