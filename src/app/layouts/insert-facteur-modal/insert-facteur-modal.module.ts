import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertFacteurModalPageRoutingModule } from './insert-facteur-modal-routing.module';

import { InsertFacteurModalPage } from './insert-facteur-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertFacteurModalPageRoutingModule
  ],
  declarations: [InsertFacteurModalPage]
})
export class InsertFacteurModalPageModule {}
