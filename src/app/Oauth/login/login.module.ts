import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AuthService } from '../../shared/Auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    FileTransfer, FileTransferObject,
    AuthService
  ],
  declarations: [LoginPage]
})
export class LoginPageModule { }
