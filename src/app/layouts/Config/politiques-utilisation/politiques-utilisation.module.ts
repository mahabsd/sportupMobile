import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolitiquesUtilisationPageRoutingModule } from './politiques-utilisation-routing.module';

import { PolitiquesUtilisationPage } from './politiques-utilisation.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolitiquesUtilisationPageRoutingModule,
    ComponentModule
  ],
  declarations: [PolitiquesUtilisationPage]
})
export class PolitiquesUtilisationPageModule { }
