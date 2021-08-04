import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionFacturationPageRoutingModule } from './gestion-facturation-routing.module';

import { GestionFacturationPage } from './gestion-facturation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionFacturationPageRoutingModule
  ],
  declarations: [GestionFacturationPage]
})
export class GestionFacturationPageModule {}
