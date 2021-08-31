import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';
import { HeaderComponent } from '../../component/header/header.component';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule,
    ComponentModule
  ],
  declarations: [MapsPage]
})
export class MapsPageModule { }
