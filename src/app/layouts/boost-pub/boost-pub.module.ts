import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoostPubPageRoutingModule } from './boost-pub-routing.module';

import { BoostPubPage } from './boost-pub.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoostPubPageRoutingModule,
    ComponentModule
  ],
  declarations: [BoostPubPage]
})
export class BoostPubPageModule {}
