import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from '../layouts/erp/top-menu/top-menu.component';
import { ComponentRoutingModule } from './component-routing.module';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ParametresComponent } from './parametres/parametres.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent,FooterComponent, ParametresComponent,TopMenuComponent],
  exports: [HeaderComponent,FooterComponent, ParametresComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    IonicModule,
  ]
})
export class ComponentModule { }
