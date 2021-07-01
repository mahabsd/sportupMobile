import { ToastController } from '@ionic/angular';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
  CanLoad,
  UrlTree,
  Route,
  UrlSegment, CanDeactivate
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './../Auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  toast: any;
  constructor(private authService: AuthService,
    public toastCtrl: ToastController,
    private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;

    // console.log(this.checkUserLogin(next, url))
    return this.checkUserLogin(next, url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state)
  }

  canDeactivate(component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }



  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {

     console.log(this.authService.isAuthenticated())
    if (this.authService.isAuthenticated()) {
      console.log(this.authService.isAuthenticated())
      this.presentToast('message', 'danger', 'top')
      return true
    } else {
      // this.typeError('Connectez vous!')
      this.router.navigateByUrl('login')
      return false;
    }
  }
  async presentToast(message, color, position) {
    this.toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color,
      position
    });
    this.toast.present();
  }
}