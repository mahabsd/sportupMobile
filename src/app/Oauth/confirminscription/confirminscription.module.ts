import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmInscriptionPageRoutingModule } from './confirminscription-routing.module';

import { ConfirmInscriptionPage } from './confirminscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmInscriptionPageRoutingModule,
    FormBuilder,
    ReactiveFormsModule
  ],
  declarations: [ConfirmInscriptionPage]
})
export class ConfirmInscriptionPageModule {}
