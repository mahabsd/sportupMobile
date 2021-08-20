import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { StatusComponent } from '../layouts/home/status/status.component';
import { ParametresComponent } from './parametres/parametres.component';


@NgModule({
  declarations: [HeaderComponent,ParametresComponent],
  exports: [HeaderComponent,ParametresComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    IonicModule
  ]
})
export class ComponentModule { }
