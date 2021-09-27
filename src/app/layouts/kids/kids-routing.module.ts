import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        path: 'profilkids/:id',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: 'notificationsKids',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
