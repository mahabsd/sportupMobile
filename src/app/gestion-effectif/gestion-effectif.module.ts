import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEffectifPageRoutingModule } from './gestion-effectif-routing.module';

import { GestionEffectifPage } from './gestion-effectif.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEffectifPageRoutingModule,
    ChartsModule
  ],
  declarations: [GestionEffectifPage]
})
export class GestionEffectifPageModule {}
