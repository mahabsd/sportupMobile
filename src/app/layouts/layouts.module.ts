import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { ComponentModule } from '../component/component.module';
import { KidsModule } from './kids/kids.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    ComponentModule,
    KidsModule
  ]
})
export class LayoutsModule { }
