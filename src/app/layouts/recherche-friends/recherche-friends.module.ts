import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheFriendsPageRoutingModule } from './recherche-friends-routing.module';

import { RechercheFriendsPage } from './recherche-friends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheFriendsPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [RechercheFriendsPage]
})
export class RechercheFriendsPageModule {}
