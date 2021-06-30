import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmInscriptionPageRoutingModule } from './confirm-inscription-routing.module';

import { ConfirmInscriptionPage } from './confirm-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmInscriptionPageRoutingModule
  ],
  declarations: [ConfirmInscriptionPage]
})
export class ConfirmInscriptionPageModule {}
