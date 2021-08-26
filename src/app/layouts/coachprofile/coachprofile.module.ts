import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CoachprofilePageRoutingModule } from './coachprofile-routing.module';
import { CoachprofilePage } from './coachprofile.page';
import { ComponentModule } from '../../component/component.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CoachprofilePage,
    children: [
      {
        path: 'coachphoto',
        loadChildren: () => import('../coachphoto/coachphoto.module').then(m => m.CoachphotoPageModule)
      },
      {
        path: 'coachpub',
        loadChildren: () => import('../coachpub/coachpub.module').then(m => m.CoachpubPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/coachphoto'
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachprofilePageRoutingModule,
    ComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachprofilePage]
})
export class CoachprofilePageModule {}
