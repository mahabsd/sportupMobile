import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEspacePageRoutingModule } from './gestion-espace-routing.module';

import { GestionEspacePage } from './gestion-espace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEspacePageRoutingModule,
  ],
  declarations: [GestionEspacePage]
})
export class GestionEspacePageModule {}
