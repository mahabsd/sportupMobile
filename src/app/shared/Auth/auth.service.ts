
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UtilsService } from '../Service/utils.service';
import { StorageService } from '../Service/storage.service';
import { throwError } from 'rxjs';
@Injectable()
export class AuthService {
  role: any;
  statut = false;
  myToast: any;
  constructor(private utilsSer: UtilsService,
    public http: HttpClient,
    public toastCtrl: ToastController,

    private storage: StorageService,
    private utilsService: UtilsService,
    private router: Router) {
  }

  login(user) {
    console.log(user);

    return this.utilsService.post(UtilsService.apiUSER + 'login', user).pipe(map((res: any) => {
      this.setSession(res);
      // this.addUser(res.id);
      return res.data;
    }));
  }
  public isLoggedIn() {
    return this.storage.get(environment.token);
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  isAuthenticated() {
    return this.isLoggedIn().pipe(map(res => res));
  }
  public getUser() {
    const user = this.storage.get(environment.currentUser);
    return user;
  }
  public logout() {
    this.storage.clear();
    this.router.navigateByUrl('/login');
  }
  public getRole() {
    this.role = this.storage.get(environment.currentUser);
    if (this.role) { this.role = this.role.role; };
    return this.role;
  }

  async setSession(authResult) {
    console.log(authResult.data?.user?._id);
    await this.storage.set(environment.idUser, authResult.data?.user?._id);
    await this.storage.set(environment.token, authResult.token);
    await this.storage.set(environment.currentUser, authResult.data.user);
  }



  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error?.error instanceof ErrorEvent) {
      console.error('An error occurred:', error?.error?.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error?.status === 50) { this.presentToast('Probléme Serveur veuillez patienter Svp...', 'danger', 'middle'); }
      console.error(`Backend returned code ${error?.status}, ` + `body was: ${error?.error?.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(error?.error?.message);
  }


  private async presentToast(message, color, position) {
    this.myToast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position
    });
    this.myToast.present();
  }
}
