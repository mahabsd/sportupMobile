import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninformationPageRoutingModule } from './signinformation-routing.module';

import { SigninformationPage } from './signinformation.page';
import { SigninPageRoutingModule } from '../signin/signin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninformationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SigninformationPage]
})
export class SigninformationPageModule {}
