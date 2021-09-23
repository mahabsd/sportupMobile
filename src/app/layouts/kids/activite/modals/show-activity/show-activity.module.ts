import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowActivityPageRoutingModule } from './show-activity-routing.module';

import { ShowActivityPage } from './show-activity.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowActivityPageRoutingModule,
    ComponentModule,
    ReactiveFormsModule
  ],
  declarations: [ShowActivityPage]
})
export class ShowActivityPageModule { }
