import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesactivermoncomptePageRoutingModule } from './desactivermoncompte-routing.module';

import { DesactivermoncomptePage } from './desactivermoncompte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesactivermoncomptePageRoutingModule
  ],
  declarations: [DesactivermoncomptePage]
})
export class DesactivermoncomptePageModule {}
