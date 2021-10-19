import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Shared/Guard/auth.guard';

const routes: Routes = [
  {
    path: '',

    children: [

      {
        path: 'boitereceptionkids',
        loadChildren: () => import('./boite-reception/boite-reception.module').then(m => m.BoiteReceptionPageModule)
      },
      {
        path: 'planning',
        loadChildren: () => import('./planning/planning.module').then(m => m.PlanningPageModule)
      },
      
      {
        path: 'tabsKids',
        loadChildren: () => import('./tabs-kids/tabs-kids.module').then(m => m.TabsKidsPageModule), canActivate: [AuthGuard]
      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then(m => m.MapsPageModule)
      },
      {
        path: 'activite',
        loadChildren: () => import('./activite/activite.module').then(m => m.ActivitePageModule)
      },
      {
        path: 'sign-kids',
        loadChildren: () => import('./sign-kids/sign-kids.module').then(m => m.SignKidsPageModule)
      },
      {
        path: 'profilkids',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: 'notificationsKids',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
      }

    ]
  },
  {
    path: 'tabs-kids',
    loadChildren: () => import('./tabs-kids/tabs-kids.module').then( m => m.TabsKidsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
