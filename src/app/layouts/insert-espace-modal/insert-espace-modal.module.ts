import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertEspaceModalPageRoutingModule } from './insert-espace-modal-routing.module';

import { InsertEspaceModalPage } from './insert-espace-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertEspaceModalPageRoutingModule
  ],
  declarations: [InsertEspaceModalPage]
})
export class InsertEspaceModalPageModule {}
