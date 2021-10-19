import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStatusKidsPageRoutingModule } from './add-status-kids-routing.module';

import { AddStatusKidsPage } from './add-status-kids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStatusKidsPageRoutingModule
  ],
  declarations: [AddStatusKidsPage]
})
export class AddStatusKidsPageModule {}
