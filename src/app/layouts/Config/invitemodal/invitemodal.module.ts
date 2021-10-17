import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {InvitemodalComponent} from './invitemodal.component'
import {FormsModule} from "@angular/forms";
import { IonIntlTelInputModule } from 'ion-intl-tel-input';

@NgModule({
  declarations: [InvitemodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonIntlTelInputModule
  ]
})
export class InvitemodalModule { }
