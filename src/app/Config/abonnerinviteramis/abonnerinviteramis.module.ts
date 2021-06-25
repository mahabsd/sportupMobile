import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonnerinviteramisPageRoutingModule } from './abonnerinviteramis-routing.module';

import { AbonnerinviteramisPage } from './abonnerinviteramis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonnerinviteramisPageRoutingModule
  ],
  declarations: [AbonnerinviteramisPage]
})
export class AbonnerinviteramisPageModule {}
