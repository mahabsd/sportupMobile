import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionMaterialPageRoutingModule } from './gestion-material-routing.module';

import { GestionMaterialPage } from './gestion-material.page';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionMaterialPageRoutingModule,
    ChartsModule
  ],
  declarations: [GestionMaterialPage]
})
export class GestionMaterialPageModule {}
