import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profil',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule),
  
      },
      {
        path: 'apropos',
        loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposPageModule),
  
      },
      {
        path: 'shearch',
        loadChildren: () => import('./shearch/shearch.module').then(m => m.ShearchPageModule),
  
      },

      {
        path: 'modal-sheare',
        loadChildren: () => import('./modal-sheare/modal-sheare.module').then(m => m.ModalShearePageModule),
  
      },
      {
        path: 'boite-reception',
        loadChildren: () => import('./boite-reception/boite-reception.module').then(m => m.BoiteReceptionPageModule),
  
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule),
  
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
        path: 'home-erp',
        loadChildren: () => import('./home-erp/home-erp.module').then(m => m.HomeErpPageModule)
      },
      {
        path: 'gestion-material',
        loadChildren: () => import('./gestion-material/gestion-material.module').then(m => m.GestionMaterialPageModule)
      },
      {
        path: 'insert-material-modal',
        loadChildren: () => import('./insert-material-modal/insert-material-modal.module').then(m => m.InsertMaterialModalPageModule)
      },
      {
        path: 'gestion-effectif',
        loadChildren: () => import('./gestion-effectif/gestion-effectif.module').then(m => m.GestionEffectifPageModule)
      },
      {
        path: 'gestion-espace',
        loadChildren: () => import('./gestion-espace/gestion-espace.module').then(m => m.GestionEspacePageModule)
      },
      {
        path: 'gestion-adherent',
        loadChildren: () => import('./gestion-adherent/gestion-adherent.module').then(m => m.GestionAdherentPageModule)
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
        loadChildren: () => import('./planning/planning.module').then(m => m.PlanningPageModule)
      },
      {
        path: 'historiqueerp',
        loadChildren: () => import('./historiqueerp/historiqueerp.module').then(m => m.HistoriqueerpPageModule)
      },
      {
        path: 'gestion-vente',
        loadChildren: () => import('./gestion-vente/gestion-vente.module').then(m => m.GestionVentePageModule)
      },
      {
        path: 'gestion-facturation',
        loadChildren: () => import('./gestion-facturation/gestion-facturation.module').then(m => m.GestionFacturationPageModule)
      },
      {
        path: 'gestion-last-effectif',
        loadChildren: () => import('./gestion-last-effectif/gestion-last-effectif.module').then(m => m.GestionLastEffectifPageModule)
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
        path: 'erp-space',
        loadChildren: () => import('./erp-space/erp-space.module').then(m => m.ErpSpacePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./kids/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'boite-reception',
        loadChildren: () => import('./kids/boite-reception/boite-reception.module').then(m => m.BoiteReceptionPageModule)
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
        path: 'sign-kids',
        loadChildren: () => import('./kids/sign-kids/sign-kids.module').then(m => m.SignKidsPageModule)
      },
      {
        path: 'profilkids',
        loadChildren: () => import('./kids/profil/profil.module').then(m => m.ProfilPageModule)
      }
    ],
  },
     {path: '', redirectTo: 'home', pathMatch: 'full'},
  
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
