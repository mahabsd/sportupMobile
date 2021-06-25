import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionLastEffectifPageRoutingModule } from './gestion-last-effectif-routing.module';

import { GestionLastEffectifPage } from './gestion-last-effectif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionLastEffectifPageRoutingModule
  ],
  declarations: [GestionLastEffectifPage]
})
export class GestionLastEffectifPageModule {}
