import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmiPageRoutingModule } from './ami-routing.module';

import { AmiPage } from './ami.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmiPageRoutingModule,
    ComponentModule
  ],
  declarations: [AmiPage]
})
export class AmiPageModule { }
