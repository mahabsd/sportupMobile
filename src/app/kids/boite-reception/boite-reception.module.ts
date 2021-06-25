import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoiteReceptionPageRoutingModule } from './boite-reception-routing.module';

import { BoiteReceptionPage } from './boite-reception.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoiteReceptionPageRoutingModule
  ],
  declarations: [BoiteReceptionPage]
})
export class BoiteReceptionPageModule {}
