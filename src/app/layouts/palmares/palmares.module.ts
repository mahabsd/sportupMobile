import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from '../../component/component.module';
import { PalmaresPageRoutingModule } from './palmares-routing.module';

import { PalmaresPage } from './palmares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PalmaresPageRoutingModule,
    ComponentModule
  ],
  declarations: [PalmaresPage]
})
export class PalmaresPageModule {}
