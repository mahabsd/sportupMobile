import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShowImagePageRoutingModule } from './show-image-routing.module';
import { ShowImagePage } from './show-image.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowImagePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ShowImagePage]
})
export class ShowImagePageModule {}
