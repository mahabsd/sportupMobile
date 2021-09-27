import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profil/:id',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule),

      },
      {
        path: 'apropos',
        loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposPageModule),

      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule),

      },

      {
        path: 'modal-sheare',
        loadChildren: () => import('./home/modal-sheare/modal-sheare.module').then(m => m.ModalShearePageModule),

      },
      {
        path: 'boitereception',
        loadChildren: () => import('./boite-reception/boite-reception.module').then(m => m.BoiteReceptionPageModule),

      },
      {
        path: 'chat/:id',
        loadChildren: () => import('./boite-reception/chat/chat.module').then(m => m.ChatPageModule),

      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then(m => m.MapsPageModule),

      },
      {
        path: 'parametre',
        loadChildren: () => import('./Config/parametre/parametre.module').then(m => m.ParametrePageModule)
      },
      {
        path: 'abonnerinviteramis',
        loadChildren: () => import('./Config/abonnerinviteramis/abonnerinviteramis.module').then(m => m.AbonnerinviteramisPageModule)
      },
      {
        path: 'updateprofil',
        loadChildren: () => import('./Config/updateprofil/updateprofil.module').then(m => m.UpdateprofilPageModule)
      },
      {
        path: 'securiteconnexion',
        loadChildren: () => import('./Config/securiteconnexion/securiteconnexion.module').then(m => m.SecuriteconnexionPageModule)
      },
      {
        path: 'langue',
        loadChildren: () => import('./Config/langue/langue.module').then(m => m.LanguePageModule)
      },
      {
        path: 'historiquepersonnel',
        loadChildren: () => import('./Config/historiquepersonnel/historiquepersonnel.module').then(m => m.HistoriquepersonnelPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./Config/contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: 'desactivermoncompte',
        loadChildren: () => import('./Config/desactivermoncompte/desactivermoncompte.module').then(m => m.DesactivermoncomptePageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./Planing/calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'statistiqueuser',
        loadChildren: () => import('./statistiqueuser/statistiqueuser.module').then(m => m.StatistiqueuserPageModule)
      },
      {
        path: 'image-modal',
        loadChildren: () => import('./image-modal/image-modal.module').then(m => m.ImageModalPageModule)
      },
      {
        path: 'erp',
        loadChildren: () => import('./erp/erp.module').then(m => m.ErpPageModule)
      },
      {
        path: 'insert-material-modal',
        loadChildren: () => import('./insert-material-modal/insert-material-modal.module').then(m => m.InsertMaterialModalPageModule)
      },

      {
        path: 'insert-espace-modal',
        loadChildren: () => import('./insert-espace-modal/insert-espace-modal.module').then(m => m.InsertEspaceModalPageModule)
      },
      {
        path: 'insert-adherent-modal',
        loadChildren: () => import('./insert-adherent-modal/insert-adherent-modal.module').then(m => m.InsertAdherentModalPageModule)
      },
      {
        path: 'insert-effectif-modal',
        loadChildren: () => import('./insert-effectif-modal/insert-effectif-modal.module').then(m => m.InsertEffectifModalPageModule)
      },
      {
        path: 'planning',
        loadChildren: () => import('./Planing/calendar/calendar.module').then(m => m.CalendarPageModule)
      },
      {
        path: 'historiqueerp',
        loadChildren: () => import('./historiqueerp/historiqueerp.module').then(m => m.HistoriqueerpPageModule)
      },

      {
        path: 'insert-vente-modal',
        loadChildren: () => import('./insert-vente-modal/insert-vente-modal.module').then(m => m.InsertVenteModalPageModule)
      },
      {
        path: 'insert-facteur-modal',
        loadChildren: () => import('./insert-facteur-modal/insert-facteur-modal.module').then(m => m.InsertFacteurModalPageModule)
      },
      {
        path: 'insert-last-effectif-modal',
        loadChildren: () => import('./insert-last-effectif-modal/insert-last-effectif-modal.module').then(m => m.InsertLastEffectifModalPageModule)
      },

      {
        path: 'accueil',
        loadChildren: () => import('./kids/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },

      {
        path: 'planning',
        loadChildren: () => import('./kids/planning/planning.module').then(m => m.PlanningPageModule)
      },
      {
        path: 'message',
        loadChildren: () => import('./kids/message/message.module').then(m => m.MessagePageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./kids/maps/maps.module').then(m => m.MapsPageModule)
      },
      {
        path: 'activite',
        loadChildren: () => import('./kids/activite/activite.module').then(m => m.ActivitePageModule)
      },
      {
        path: 'kids',

        loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule)
      },

      {
        path: 'ami',
        loadChildren: () => import('./ami/ami.module').then(m => m.AmiPageModule)
      },
      {
        path: 'coachprofile',
        loadChildren: () => import('./coachprofile/coachprofile.module').then(m => m.CoachprofilePageModule)
      },
      {
        path: 'palmares',
        loadChildren: () => import('./coachprofile/palmares/palmares.module').then(m => m.PalmaresPageModule)
      },
      {
        path: 'scan',
        loadChildren: () => import('./scan/scan.module').then(m => m.ScanPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },








]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
