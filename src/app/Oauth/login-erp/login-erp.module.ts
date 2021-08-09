import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
 

import { IonicModule } from '@ionic/angular';

import { LoginErpPageRoutingModule } from './login-erp-routing.module';

import { LoginErpPage } from './login-erp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginErpPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [LoginErpPage]
})
export class LoginErpPageModule {}