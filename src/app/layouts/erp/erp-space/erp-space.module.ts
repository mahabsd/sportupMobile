import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErpSpacePageRoutingModule } from './erp-space-routing.module';

import { ErpSpacePage } from './erp-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErpSpacePageRoutingModule
  ],
  declarations: [ErpSpacePage]
})
export class ErpSpacePageModule {}
