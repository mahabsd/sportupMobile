import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';

import { CommunityPage } from './community.page';
import { ComponentModule } from 'src/app/component/component.module';
import { ShowEventPageModule } from './show-event/show-event.module';
import { AddPageModule } from './add/add.module';
import { ShowPagePageModule } from './show-page/show-page.module';
import { OneEventComponent } from './one-event/one-event.component';
import { ShowpageComponent } from './showpage/showpage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityPageRoutingModule,
    ComponentModule,
    ShowEventPageModule,
    AddPageModule,
    ShowPagePageModule,
  ],
  declarations: [CommunityPage,OneEventComponent,ShowpageComponent]
})
export class CommunityPageModule {}
