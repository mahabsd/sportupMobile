import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

 
import { PalmaresPopOverComponent } from '././palmares-pop-over.component';
import { ComponentModule } from 'src/app/component/component.module';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule
  ],
  declarations: [PalmaresPopOverComponent]
})
export class PalmaresPopOverModule {}
