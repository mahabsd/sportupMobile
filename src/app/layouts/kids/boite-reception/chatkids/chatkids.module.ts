import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatkidsPageRoutingModule } from './chatkids-routing.module';

import { ChatkidsPage } from './chatkids.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatkidsPageRoutingModule,
    ComponentModule
  ],
  declarations: [ChatkidsPage]
})
export class ChatkidsPageModule {}
