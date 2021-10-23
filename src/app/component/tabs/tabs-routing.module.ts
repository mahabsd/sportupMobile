import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsResolverService } from 'src/app/Shared/Service/posts-resolver.service';
import { TabsPage } from './tabs.page';
import { ProfileResolverService } from '../../Shared/Resolvers/ProfileResolverService';
import { AdultsNotAllowedGuard } from 'src/app/shared/Guard/adults-not-allowed.guard';
import { RolesGuardGuard } from 'src/app/shared/Guard/roles-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./../../layouts/home/home.module').then(m => m.HomePageModule),
            canActivate:[RolesGuardGuard],
            resolve: {
              data: ProfileResolverService
            }
          },
        ]
      },
      {
        path: 'accueil',
        loadChildren: () => import('./../../layouts/kids/accueil/accueil.module').then(m => m.AccueilPageModule),
        canActivate:[AdultsNotAllowedGuard]

      },
      {
        path: 'commentskids',
        loadChildren: () => import('./../../layouts/kids/comments-kids/comments-kids.module').then(m => m.CommentsKidsPageModule),
        canActivate:[AdultsNotAllowedGuard]

      },
      {
        path: 'layouts',
        loadChildren: () => import('./../../layouts/layouts.module').then(m => m.LayoutsModule)
      },
      {
        path: 'profil/:id',
        loadChildren: () => import('./../../layouts/profil/profil.module').then(m => m.ProfilPageModule),

      },
      {
        path: 'profile',
        loadChildren: () => import('./../../layouts/profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: 'home-erp',
        loadChildren: () => import('../../layouts/erp/home-erp/home-erp.module').then(m => m.HomeErpPageModule)
      },
      {
        path: 'profilkids/:id',
        loadChildren: () => import('../../layouts/kids/profil/profil.module').then(m => m.ProfilPageModule),
        canActivate:[AdultsNotAllowedGuard]
      },
      {
        path: 'hobbies',
        loadChildren: () => import('../../layouts/hobbies/hobbies.module').then(m => m.HobbiesPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
