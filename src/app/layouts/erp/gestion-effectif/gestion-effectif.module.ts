import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEffectifPageRoutingModule } from './gestion-effectif-routing.module';

import { GestionEffectifPage } from './gestion-effectif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEffectifPageRoutingModule,

  ],
  declarations: [GestionEffectifPage]
})
export class GestionEffectifPageModule {}
