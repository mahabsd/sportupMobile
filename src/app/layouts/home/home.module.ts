import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { FooterPageModule } from '../../component/footer/footer.module';
import { StatusComponent } from './status/status.component';
import { ReactionsPage } from './reactions/reactions.page';
import { ComponentModule } from '../../component/component.module';
import { CommentsPage } from './comments/comments.page';
import { CommentsPageModule } from './comments/comments.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterPageModule,
    ComponentModule,
    ReactiveFormsModule,
    CommentsPageModule
  ],
  declarations: [HomePage, StatusComponent],
  exports: [HomePage, StatusComponent]
})
export class HomePageModule { }
