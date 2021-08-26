import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CoachpubPageRoutingModule } from './coachpub-routing.module';

import { CoachpubPage } from './coachpub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachpubPageRoutingModule,
 
  ],
  declarations: [CoachpubPage]
})
export class CoachpubPageModule {}
