import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileResolverService } from 'src/app/Shared/Resolvers/ProfileResolverService';

import { TabsKidsPage } from './tabs-kids.page';

const routes: Routes = [
  {
    path: '',
    component: TabsKidsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('src/app/layouts/kids/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'profil/:id',
        loadChildren: () => import('src/app/layouts/profil/profil.module').then(m => m.ProfilPageModule),

      },
      {
        path: 'profile',
        loadChildren: () => import('src/app/layouts/profil/profil.module').then(m => m.ProfilPageModule)
      },
      
      {
        path: 'boitereceptionkids',
        loadChildren: () => import('src/app/layouts/kids/boite-reception/boite-reception.module').then(m => m.BoiteReceptionPageModule)
      }
      ,
      {
        path: 'profilkids/:id',
        loadChildren: () => import('src/app/layouts/kids/profil/profil.module').then(m => m.ProfilPageModule)
      },
     
    ]
  },
  {
    path: '',
    redirectTo: 'tabsKids/accueil',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsKidsPageRoutingModule {}
