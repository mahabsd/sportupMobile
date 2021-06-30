import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShearchPageRoutingModule } from './shearch-routing.module';

import { ShearchPage } from './shearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShearchPageRoutingModule
  ],
  declarations: [ShearchPage]
})
export class ShearchPageModule {}
