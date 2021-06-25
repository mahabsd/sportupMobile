import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  token = localStorage.getItem('token');
  constructor(private storage: Storage, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const authInfo = {
      authenticated: false
    };
    this.storage.get('token').then((val) => {
      console.log(val);
      if (val) {
        authInfo.authenticated = true;
        console.log('logged');
      } else {
        authInfo.authenticated = true;
        // change by false
        console.log('not logged');
      }
      if (!authInfo.authenticated) {
        console.log(3);
        this.router.navigate(["login"]);
        return false;
      }
    });
    return true;
  }
}
