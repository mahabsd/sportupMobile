import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentModule } from 'src/app/component/component.module';
import { DeletePostPopoverPage } from './delete-post-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ComponentModule
  ],
  declarations: [DeletePostPopoverPage]
})
export class CoachprofilePageModule { }
