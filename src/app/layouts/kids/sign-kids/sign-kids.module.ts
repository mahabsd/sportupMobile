import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignKidsPageRoutingModule } from './sign-kids-routing.module';

import { SignKidsPage } from './sign-kids.page';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';



import { FormGroup,  ReactiveFormsModule } from '@angular/forms';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignKidsPageRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [
    FileTransfer, FileTransferObject,
  ],
  declarations: [SignKidsPage]
})
export class SignKidsPageModule {}
