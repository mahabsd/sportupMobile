import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentsKidsPageRoutingModule } from './comments-kids-routing.module';

import { CommentsKidsPage } from './comments-kids.page';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/component/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentsKidsPageRoutingModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  declarations: [CommentsKidsPage,HeaderComponent]
})
export class CommentsKidsPageModule {}