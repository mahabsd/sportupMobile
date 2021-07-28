import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { StatusComponent } from '../layouts/home/status/status.component';


@NgModule({
  declarations: [HeaderComponent, StatusComponent],
  exports: [HeaderComponent, StatusComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    IonicModule
  ]
})
export class ComponentModule { }
