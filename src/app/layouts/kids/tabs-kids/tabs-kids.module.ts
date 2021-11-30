import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsKidsPageRoutingModule } from './tabs-kids-routing.module';

import { TabsKidsPage } from './tabs-kids.page';
import { ComponentModule } from '../../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsKidsPageRoutingModule,
    ComponentModule
  ],
  declarations: [TabsKidsPage]
})
export class TabsKidsPageModule {}
