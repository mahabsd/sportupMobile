import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {InvitemodalComponent} from './invitemodal.component'
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [InvitemodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class InvitemodalModule { }
