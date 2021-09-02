import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../../../component/component.module';
import { IonicModule } from '@ionic/angular';

import { UpdateprofilPageRoutingModule } from './updateprofil-routing.module';

import { UpdateprofilPage } from './updateprofil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateprofilPageRoutingModule,
    ComponentModule
  ],
  declarations: [UpdateprofilPage]
})
export class UpdateprofilPageModule {}
