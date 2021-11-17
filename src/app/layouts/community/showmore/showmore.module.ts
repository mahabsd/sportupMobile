import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowmorePageRoutingModule } from './showmore-routing.module';

import { ShowmorePage } from './showmore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowmorePageRoutingModule
  ],
  declarations: [ShowmorePage]
})
export class ShowmorePageModule {}
