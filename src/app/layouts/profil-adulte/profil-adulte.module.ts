import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilAdultePageRoutingModule } from './profil-adulte-routing.module';
import { PopOverSuivrePageComponent } from '../../layouts/profil/pop-over-suivre-page/pop-over-suivre-page.component';
import { ProfilAdultePage } from './profil-adulte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilAdultePageRoutingModule
  ],
  declarations: [ProfilAdultePage,PopOverSuivrePageComponent]
})
export class ProfilAdultePageModule {}
