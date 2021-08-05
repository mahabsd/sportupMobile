import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentsKidsPageRoutingModule } from './comments-kids-routing.module';

import { CommentsKidsPage } from './comments-kids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentsKidsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CommentsKidsPage]
})
export class CommentsKidsPageModule {}
