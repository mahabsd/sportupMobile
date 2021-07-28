import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { FooterPageModule } from '../../component/footer/footer.module';
import { StatusComponent } from './status/status.component';
import { ReactionsPage } from './reactions/reactions.page';
import { ComponentModule } from '../../component/component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterPageModule,
ComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
