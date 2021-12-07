import { ComponentModule } from './../../../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfidentialitePageRoutingModule } from './confidentialite-routing.module';

import { ConfidentialitePage } from './confidentialite.page';

@NgModule({
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ConfidentialitePageRoutingModule
  ],
  declarations: [ConfidentialitePage]
})
export class ConfidentialitePageModule {}
