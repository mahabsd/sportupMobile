import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CoachprofilePageRoutingModule } from './coachprofile-routing.module';
import { CoachprofilePage } from './coachprofile.page';
import { ComponentModule } from '../../component/component.module';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from '../home/home.module';
import { CoachphotoPage } from './coachphoto/coachphoto.page';
import { CoachpubPage } from './coachpub/coachpub.page';
 




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachprofilePageRoutingModule,
    ComponentModule,
    HomePageModule
  ],
  declarations: [CoachprofilePage, CoachphotoPage, CoachpubPage ],
  exports: [CoachprofilePage, CoachphotoPage, CoachpubPage]
})
export class CoachprofilePageModule { }
