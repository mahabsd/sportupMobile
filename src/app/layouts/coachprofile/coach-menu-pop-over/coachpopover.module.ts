import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CoachMenuPopOverComponent } from '././coach-menu-pop-over.component';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ComponentModule
  ],
  declarations: [CoachMenuPopOverComponent]
})
export class CoachprofilePageModule { }
