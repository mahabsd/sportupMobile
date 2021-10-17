import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from '../layouts/erp/top-menu/top-menu.component';
import { ComponentRoutingModule } from './component-routing.module';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { StatusComponent } from '../layouts/home/status/status.component';
import { ParametresComponent } from './parametres/parametres.component';


@NgModule({
  declarations: [HeaderComponent, ParametresComponent,TopMenuComponent],
  exports: [HeaderComponent, ParametresComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    IonicModule,
  ]
})
export class ComponentModule { }
