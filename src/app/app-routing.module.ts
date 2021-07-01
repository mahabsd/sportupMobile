import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/Guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./Oauth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-erp',
    loadChildren: () => import('./Oauth/login-erp/login-erp.module').then( m => m.LoginErpPageModule)
  },
 
  {
    path: '',
    loadChildren: () => import('./layouts/layouts.module').then( m => m.LayoutsModule),canActivate:[AuthGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./component/sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },

  {
    path: 'signin',
    loadChildren: () => import('./Oauth/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signinformation',
    loadChildren: () => import('./Oauth/signinformation/signinformation.module').then( m => m.SigninformationPageModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'sidemenu',
    loadChildren: () => import('./component/sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },
 
  {
    path: 'confirmation',
    loadChildren: () => import('./Oauth/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: '**',
    redirectTo:''
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
