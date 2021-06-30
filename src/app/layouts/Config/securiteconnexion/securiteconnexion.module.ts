import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecuriteconnexionPageRoutingModule } from './securiteconnexion-routing.module';

import { SecuriteconnexionPage } from './securiteconnexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecuriteconnexionPageRoutingModule
  ],
  declarations: [SecuriteconnexionPage]
})
export class SecuriteconnexionPageModule {}
