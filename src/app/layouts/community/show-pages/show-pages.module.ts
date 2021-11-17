import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPagesPageRoutingModule } from './show-pages-routing.module';

import { ShowPagesPage } from './show-pages.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPagesPageRoutingModule,
    ComponentModule
  ],
  declarations: [ShowPagesPage]
})
export class ShowPagesPageModule {}
