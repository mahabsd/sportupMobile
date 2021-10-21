import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuardGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('__mydb/_ionickv/currentUser') );

    if (user.role === 'admin'
      || user.role === 'user'
      || user.role === 'pro') {
      return true;
    } else {
      this.router.navigate(['tabsKids/accueil']);

      return false;
    }

  }

}
