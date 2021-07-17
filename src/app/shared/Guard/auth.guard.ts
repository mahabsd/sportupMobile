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
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  toast: any;
  token: any;
  constructor(private authService: AuthService,
    public toastCtrl: ToastController,
    private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;


    return this.checkUserLogin(next, url).pipe(map(res => res));

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
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



  checkUserLogin(route: ActivatedRouteSnapshot, url: any): Observable<boolean> {

    return this.authService.isAuthenticated().pipe(map(res => {
      if (res) {
        // console.log(this.authService.isAuthenticated());
        if (res) { this.token = true; }
        return this.token;
      } else {
        // this.typeError('Connectez vous!')
        this.presentToast('Connectez vous!', 'warning', 'top');

        this.router.navigateByUrl('login');
        return false;
      }
    }));
  }
  async presentToast(message, color, position) {
    this.toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position
    });
    this.toast.present();
  }
}
