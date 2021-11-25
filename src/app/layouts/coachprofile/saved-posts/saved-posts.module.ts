import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPOSTSPageRoutingModule } from './saved-posts-routing.module';

import { SavedPOSTSPage } from './saved-posts.page';
import { StatusComponent } from '../../home/status/status.component';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedPOSTSPageRoutingModule,
    ComponentModule
  ],
  declarations: [SavedPOSTSPage, StatusComponent]
})
export class SavedPOSTSPageModule {}
