import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachprofilePage } from './coachprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CoachprofilePage,
    children: [
      {
        path: 'coachphoto',
        loadChildren: () => import('./coachphoto/coachphoto.module').then(m => m.CoachphotoPageModule)
      },
      {
        path: 'coachpub',
        loadChildren: () => import('./coachpub/coachpub.module').then(m => m.CoachpubPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/coachprofile/coachphoto'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachprofilePageRoutingModule { }
