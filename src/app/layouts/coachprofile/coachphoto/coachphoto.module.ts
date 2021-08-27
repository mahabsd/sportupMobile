import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachphotoPageRoutingModule } from './coachphoto-routing.module';

import { CoachphotoPage } from './coachphoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachphotoPageRoutingModule
  ],
  declarations: [CoachphotoPage]
})
export class CoachphotoPageModule {}
