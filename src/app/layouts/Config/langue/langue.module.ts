import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguePageRoutingModule } from './langue-routing.module';

import { LanguePage } from './langue.page';
import { ComponentModule } from 'src/app/component/component.module';
import { SharedModule } from '../../../shared/modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguePageRoutingModule,
    ComponentModule,
    SharedModule,
  ],
  declarations: [LanguePage]
})
export class LanguePageModule { }
