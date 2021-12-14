import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionMaterialPageRoutingModule } from './gestion-material-routing.module';

import { GestionMaterialPage } from './gestion-material.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionMaterialPageRoutingModule,

  ],
  declarations: [GestionMaterialPage]
})
export class GestionMaterialPageModule {}
