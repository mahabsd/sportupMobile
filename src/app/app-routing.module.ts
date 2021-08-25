import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Shared/Guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./Oauth/resetpass/resetpass.module').then(m => m.ResetpassPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Oauth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login-erp',
    loadChildren: () => import('./layouts/erp/login-erp/login-erp.module').then(m => m.LoginErpPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule), canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./component/tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthGuard]
  },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./component/sidemenu/sidemenu.module').then(m => m.SidemenuPageModule)
  // },
  {
    path: 'signin',
    loadChildren: () => import('./Oauth/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'signinformation',
    loadChildren: () => import('./Oauth/signinformation/signinformation.module').then(m => m.SigninformationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./Oauth/confirmation/confirmation.module').then(m => m.ConfirmationPageModule)
  },
  {
    path: 'popovercomponent',
    loadChildren: () => import('./layouts/kids/popovercomponent/popovercomponent.module').then(m => m.PopovercomponentPageModule)
  },
  {
    path: 'show-image',
    loadChildren: () => import('./component/modal/show-image/show-image.module').then(m => m.ShowImagePageModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
