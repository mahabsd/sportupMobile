
import { StorageService } from './../Service/storage.service';
import { ToastController } from '@ionic/angular';
import { UtilsService } from './../Service/utils.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment'
@Injectable()
export class AuthService {
  role: any;
  constructor(private utilsSer: UtilsService,
    public http: HttpClient,
    public toastCtrl: ToastController,
    private storage:StorageService,
    private route: Router) {
  }

  login(user) {
    // console.log(JSON.stringify(user))
    // localhost:7112/apiv/v1/users/login
    return this.http.post(UtilsService.API_USER + 'login', user).pipe(map((res: any) => {
      // console.log(res);
      this.setSession(res);
      this.addUser(res.id);
      
      return res.data;
    }, err => {
      console.log(err);

      return this.presentToast(err.message, 'danger', 'middle')

    }));
  }


  isAuthenticated(): boolean {
    // here you can check if user is authenticated or not through his token
    // console.log(this.getRole())

    return this.isLoggedIn()
  }

  private setSession(authResult) {
    // console.log(authResult)
    const expiresAt = moment().add(authResult.expiredIn, 'second');
    localStorage.setItem(environment.idUser, authResult.id);
    localStorage.setItem(environment.TOKEN, authResult.token);
    localStorage.setItem(environment.ExpiresIn, JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.clear()
    location.href='/auth/login';
  }

  public isLoggedIn() {
    // console.log(moment().isBefore(this.getExpiration()));
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem(environment.ExpiresIn);
    const expiresAt = JSON.parse(expiration);
    // console.log('expiresat', moment(expiresAt));
    return moment(expiresAt);
  }

  public addUser(id) {
    return this.utilsSer.get(UtilsService.API_USER + 'Me').subscribe((res: any) => {
      console.log('getuser', res.data.data)
      localStorage.setItem(environment.currentUser, JSON.stringify(res.data.data));
      // this.storage.set(environment.currentUser, res.data.data);
      return res;
    })
  }

  public getUser() {
    console.log(localStorage.getItem(environment.currentUser))
    let user = JSON.parse(localStorage.getItem(environment.currentUser))
    return user
  }

  public getRole() {

    this.role = JSON.parse(localStorage.getItem(environment.currentUser));
    if (this.role) this.role = this.role.role
    // console.log(this.role)
    return this.role
  }
  async presentToast(message, color, position) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color,
      position
    });
    toast.present();
  }
}
