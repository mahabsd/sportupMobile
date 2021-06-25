import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeErpPageRoutingModule } from './home-erp-routing.module';

import { HomeErpPage } from './home-erp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeErpPageRoutingModule
  ],
  declarations: [HomeErpPage]
})
export class HomeErpPageModule {}
