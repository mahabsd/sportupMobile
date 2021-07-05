
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

import * as moment from 'moment'
import { UtilsService } from '../Service/utils.service';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { StorageService } from '../Service/storage.service';
@Injectable()
export class AuthService {
  role: any;
  statut: boolean = false
  constructor(private utilsSer: UtilsService,
    public http: HttpClient,
    public toastCtrl: ToastController,

    private storage: StorageService,
    private utilsService: UtilsService,
    private router: Router) {
  }

  login(user) {
    // console.log(JSON.stringify(user))
    // localhost:7112/apiv/v1/users/login
    return this.utilsService.post(UtilsService.API_USER + 'login', user).pipe(map((res: any) => {
      // console.log(res);
      this.setSession(res);
      // this.addUser(res.id);

      return res.data;
    }, err => {
      console.log(err);



    }));
  }


  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    
    return this.isLoggedIn().then(res => {
      console.log(res)
      return res
    })
  }

  private setSession(authResult) {
    // const expiresAt = moment().add(authResult.expiredIn, 'second');
    console.log(authResult);
    this.storage.set(environment.idUser, authResult.data.user._id)
    this.storage.set(environment.TOKEN, authResult.token)
    this.storage.set(environment.currentUser, authResult.data.user);
    // localStorage.setItem(environment.idUser, authResult.data.user._id);
    // localStorage.setItem(environment.TOKEN, authResult.token);
    // localStorage.setItem(environment.ExpiresIn, JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    // localStorage.clear();
    this.storage.clear();
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn() {
    return this.storage.get(environment.idUser).then(res => {
      console.log(res);

      return res;
    })


  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  // getExpiration() {
  //   const expiration = localStorage.getItem(environment.ExpiresIn);
  //   const expiresAt = JSON.parse(expiration);
  //   // console.log('expiresat', moment(expiresAt));
  //   return moment(expiresAt);
  // }

  public addUser(id) {
    return this.utilsSer.get(UtilsService.API_USER + 'Me').subscribe((res: any) => {
      console.log('getuser', res.data.data)
      // localStorage.setItem(environment.currentUser, JSON.stringify(res.data.data));
      this.storage.set(environment.currentUser, res.data.data);
      return res;
    })
  }

  public getUser() {
    console.log(this.storage.get(environment.currentUser))
    let user = this.storage.get(environment.currentUser)
    return user
  }

  public getRole() {

    this.role = this.storage.get(environment.currentUser)
    if (this.role) this.role = this.role.role
    // console.log(this.role)
    return this.role
  }

}
