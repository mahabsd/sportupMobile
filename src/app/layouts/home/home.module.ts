import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { FooterPageModule } from '../../component/footer/footer.module';
import { StatusComponent } from './status/status.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterPageModule,
    
  ],
  declarations: [HomePage,StatusComponent]
})
export class HomePageModule {}
