import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdultsNotAllowedGuard implements CanActivate {
  currentUser;

  constructor(public router: Router,
    private userservice: UserService,
) { }

canActivate(): boolean {
  const user = JSON.parse(localStorage.getItem('__mydb/_ionickv/currentUser') );

  if (user.role === 'kids') {
    return true;
  } else {
    this.router.navigate(['menu/tabs/home']);

    return false;
  }

}
}
