import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CoachprofilePageRoutingModule } from './coachprofile-routing.module';
import { CoachprofilePage } from './coachprofile.page';
import { ComponentModule } from '../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachprofilePageRoutingModule,
    ComponentModule
  ],
  declarations: [CoachprofilePage]
})
export class CoachprofilePageModule {}
