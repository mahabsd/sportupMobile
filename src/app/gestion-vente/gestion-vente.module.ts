import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionVentePageRoutingModule } from './gestion-vente-routing.module';

import { GestionVentePage } from './gestion-vente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionVentePageRoutingModule
 
  ],
  declarations: [GestionVentePage]
})
export class GestionVentePageModule {}
