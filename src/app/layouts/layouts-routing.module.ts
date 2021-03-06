import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../Shared/Auth/auth.service';
import { AdultsNotAllowedGuard } from '../shared/Guard/adults-not-allowed.guard';
import { RolesGuardGuard } from '../shared/Guard/roles-guard.guard';
import { } from './boost-pub/boost-pub.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profil/:id/:typepage',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule), canActivate: [RolesGuardGuard]
      },
      {
        path: 'profil-kid/:id',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule),

      },
      {
        path: 'apropos',
        loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposPageModule), canActivate: [RolesGuardGuard]

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
        canActivate: [RolesGuardGuard]

      },
      {
        path: 'chat/:id',
        loadChildren: () => import('./boite-reception/chat/chat.module').then(m => m.ChatPageModule),
        canActivate: [RolesGuardGuard]
      },

      {
        path: 'chatkids/:id',
        loadChildren: () => import('./kids/boite-reception/chatkids/chatkids.module').then(m => m.ChatkidsPageModule),
        canActivate: [AdultsNotAllowedGuard]

      },
      {
        path: 'maps',
        loadChildren: () => import('./maps/maps.module').then(m => m.MapsPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'parametre',
        loadChildren: () => import('./Config/parametre/parametre.module').then(m => m.ParametrePageModule),
        //canActivate:[RolesGuardGuard]
      },
      {
        path: 'abonnerinviteramis',
        loadChildren: () => import('./Config/abonnerinviteramis/abonnerinviteramis.module').then(m => m.AbonnerinviteramisPageModule),
        // canActivate:[RolesGuardGuard]
      },
      {
        path: 'updateprofil',
        loadChildren: () => import('./Config/updateprofil/updateprofil.module').then(m => m.UpdateprofilPageModule),
        //  canActivate:[RolesGuardGuard]
      },
      {
        path: 'securiteconnexion',
        loadChildren: () => import('./Config/securiteconnexion/securiteconnexion.module').then(m => m.SecuriteconnexionPageModule),
        // canActivate:[RolesGuardGuard]
      },
      {
        path: 'langue',
        loadChildren: () => import('./Config/langue/langue.module').then(m => m.LanguePageModule),
      },
      {
        path: 'historiquepersonnel',
        loadChildren: () => import('./Config/historiquepersonnel/historiquepersonnel.module').then(m => m.HistoriquepersonnelPageModule),
        // canActivate:[RolesGuardGuard]
      },


      {
        path: 'contact',
        loadChildren: () => import('./Config/contact/contact.module').then(m => m.ContactPageModule),
        // canActivate:[RolesGuardGuard]
      },
      {
        path: 'help',
        loadChildren: () => import('./Config/help-page/help-page.module').then(m => m.HelpPagePageModule),
        // canActivate:[RolesGuardGuard]
      },
      {
        path: 'desactivermoncompte',
        loadChildren: () => import('./Config/desactivermoncompte/desactivermoncompte.module').then(m => m.DesactivermoncomptePageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./Planing/calendar/calendar.module').then(m => m.CalendarPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'statistiqueuser',
        loadChildren: () => import('./statistiqueuser/statistiqueuser.module').then(m => m.StatistiqueuserPageModule),
        canActivate: [RolesGuardGuard]
      }
      ,
      {
        path: 'image-modal',
        loadChildren: () => import('./image-modal/image-modal.module').then(m => m.ImageModalPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'erp',
        loadChildren: () => import('./erp/erp.module').then(m => m.ErpPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'insert-material-modal',
        loadChildren: () => import('./insert-material-modal/insert-material-modal.module').then(m => m.InsertMaterialModalPageModule),
        canActivate: [RolesGuardGuard]
      },

      {
        path: 'insert-espace-modal',
        loadChildren: () => import('./insert-espace-modal/insert-espace-modal.module').then(m => m.InsertEspaceModalPageModule),
      },
      {
        path: 'insert-adherent-modal',
        loadChildren: () => import('./insert-adherent-modal/insert-adherent-modal.module').then(m => m.InsertAdherentModalPageModule),
      },
      {
        path: 'insert-effectif-modal',
        loadChildren: () => import('./insert-effectif-modal/insert-effectif-modal.module').then(m => m.InsertEffectifModalPageModule),
      },
      {
        path: 'planning',
        loadChildren: () => import('./Planing/calendar/calendar.module').then(m => m.CalendarPageModule),
      },
      {
        path: 'historiqueerp',
        loadChildren: () => import('./historiqueerp/historiqueerp.module').then(m => m.HistoriqueerpPageModule),
      },

      {
        path: 'insert-vente-modal',
        loadChildren: () => import('./insert-vente-modal/insert-vente-modal.module').then(m => m.InsertVenteModalPageModule),
      },
      {
        path: 'insert-facteur-modal',
        loadChildren: () => import('./insert-facteur-modal/insert-facteur-modal.module').then(m => m.InsertFacteurModalPageModule),
      },
      {
        path: 'insert-last-effectif-modal',
        loadChildren: () => import('./insert-last-effectif-modal/insert-last-effectif-modal.module')
          .then(m => m.InsertLastEffectifModalPageModule),
      },

      {
        path: 'accueil',
        loadChildren: () => import('./kids/accueil/accueil.module').then(m => m.AccueilPageModule),
        canActivate: [AdultsNotAllowedGuard]
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
        canActivate: [RolesGuardGuard]
      },

      {
        path: 'planning-kids',
        loadChildren: () => import('./kids/planning/planning.module').then(m => m.PlanningPageModule),
        canActivate: [AdultsNotAllowedGuard]
      },
      {
        path: 'message',
        loadChildren: () => import('./kids/message/message.module').then(m => m.MessagePageModule),
        canActivate: [AdultsNotAllowedGuard]

      },
      {
        path: 'maps',
        loadChildren: () => import('./kids/maps/maps.module').then(m => m.MapsPageModule),
        canActivate: [AdultsNotAllowedGuard]

      },
      {
        path: 'activite',
        loadChildren: () => import('./kids/activite/activite.module').then(m => m.ActivitePageModule),
        canActivate: [AdultsNotAllowedGuard]

      },
      {
        path: 'kids',
        loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule),
        canActivate: [AdultsNotAllowedGuard]
      },

      {
        path: 'ami',
        loadChildren: () => import('./ami/ami.module').then(m => m.AmiPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'coachprofile/:id/:type',
        loadChildren: () => import('./coachprofile/coachprofile.module').then(m => m.CoachprofilePageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'palmares/:id',
        loadChildren: () => import('./coachprofile/palmares/palmares.module').then(m => m.PalmaresPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'scan',
        loadChildren: () => import('./scan/scan.module').then(m => m.ScanPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'politiques-utilisation',
        loadChildren: () => import('./Config/politiques-utilisation/politiques-utilisation.module').
          then(m => m.PolitiquesUtilisationPageModule),
        // canActivate:[RolesGuardGuard]
      },
      {
        path: 'confidentialite',
        loadChildren: () => import('./Config/confidentialite/confidentialite.module').
          then(m => m.ConfidentialitePageModule),
        // canActivate:[RolesGuardGuard]
      },
      {
        path: 'reglespublicitaires',
        loadChildren: () => import('./Config/reglespublicitaires/reglespublicitaires.module').
          then(m => m.ReglespublicitairesModule),
        // canActivate:[RolesGuardGuard]
      },
      {
        path: 'profiladulte/:id',
        loadChildren: () => import('./profil-adulte/profil-adulte.module').then(m => m.ProfilAdultePageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'one-status/:id',
        loadChildren: () => import('./home/one-status/one-status.module').then(m => m.OneStatusPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'community',
        loadChildren: () => import('./community/community.module').then(m => m.CommunityPageModule),
        canActivate: [RolesGuardGuard]
      },
      {
        path: 'help-page',
        loadChildren: () => import('./Config/help-page/help-page.module').then(m => m.HelpPagePageModule)
      },
      {
        path: 'show-event/:id',
        loadChildren: () => import('./community/show-event/show-event.module').then(m => m.ShowEventPageModule)
      },
      {
        path: 'show-page/:id',
        loadChildren: () => import('./community/show-page/show-page.module').then(m => m.ShowPagePageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./community/add/add.module').then(m => m.AddPageModule)
      },
      {
        path: 'saved-posts',
        loadChildren: () => import('./coachprofile/saved-posts/saved-posts.module').then(m => m.SavedPOSTSPageModule)
      },
      {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
      },
      {
        path: 'publicity',
        loadChildren: () => import('./publicity/publicity.module').then(m => m.PublicityPageModule)
      },
      {
        path: 'boost-pub',
        loadChildren: () => import('./boost-pub/boost-pub.module').then(m => m.BoostPubPageModule)
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'publicity',
    loadChildren: () => import('./publicity/publicity.module').then(m => m.PublicityPageModule)
  },
  {
    path: 'boost-pub',
    loadChildren: () => import('./boost-pub/boost-pub.module').then(m => m.BoostPubPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./config/report/report.module').then(m => m.ReportPageModule)
  },  {
    path: 'sum-reports',
    loadChildren: () => import('./config/sum-reports/sum-reports.module').then( m => m.SumReportsPageModule)
  },













]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class LayoutsRoutingModule { }
