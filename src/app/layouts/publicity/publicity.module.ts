import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicityPageRoutingModule } from './publicity-routing.module';

import { PublicityPage } from './publicity.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PublicityPageRoutingModule
  ],
  declarations: [PublicityPage]
})
export class PublicityPageModule {}
