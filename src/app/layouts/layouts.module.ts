import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { ComponentModule } from '../component/component.module';
import { LikesPipeModule } from '../shared/Pipe/likesPipe.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    ComponentModule,
LikesPipeModule
  ]
})
export class LayoutsModule { }
