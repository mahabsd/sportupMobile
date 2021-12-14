import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAdherentPageRoutingModule } from './gestion-adherent-routing.module';

import { GestionAdherentPage } from './gestion-adherent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAdherentPageRoutingModule,
  ],
  declarations: [GestionAdherentPage]
})
export class GestionAdherentPageModule {}
