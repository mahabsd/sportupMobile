import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpPagePageRoutingModule } from './help-page-routing.module';

import { HelpPagePage } from './help-page.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpPagePageRoutingModule,
    ComponentModule
  ],
  declarations: [HelpPagePage]
})
export class HelpPagePageModule {}
