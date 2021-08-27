/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { map, catchError } from 'rxjs/operators';
import { User } from '../Model/User';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myToast: any;

  constructor(private utilsService: UtilsService,
    public toastCtrl: ToastController) { }
  getMe(): Observable<User> {
    return this.utilsService.get(UtilsService.apiUSER + 'Me').pipe(map(res => {
      return res;
    }), catchError(this.handleError));
  }
  searchUser(config: User): Observable<{ user: User[] }> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};
    Object.keys(config)
      .forEach((key) => {
        params[key] = config[key];
      });

    return this.utilsService.get('users' + ((config.name === 'feed') ? '/feed' : ''));
  }

  updateUser(user: User) {
    return this.utilsService.patch(UtilsService.apiUSER + 'updateMe', user);


  }
  getUser(id): Observable<User> {
    return this.utilsService.get(UtilsService.apiUSER + id).pipe(map(res => {
      return res;
    }), catchError(this.handleError));
  }
  signUp(user: User): Observable<User> {
    return this.utilsService.post(UtilsService.apiUSER + 'signup', user).pipe(map(res => res
    ), catchError(this.handleError));
  }
  confirmInscription(code): Observable<any> {
    return this.utilsService.post(UtilsService.apiUSER + 'confirm', code).pipe(map(res => res), catchError(this.handleError));
  }
  forgotPassword(user: User): Observable<User> {
    return this.utilsService.post(UtilsService.apiUSER + 'forgotPassword', user).pipe(map(res => res), catchError(this.handleError));
  }
  resetPassword(token: any): Observable<User> {
    return this.utilsService.patch(UtilsService.apiUSER + 'resetPassword', token).pipe(map(res => res), catchError(this.handleError));
  }
  renvoyerToken(user: User): Observable<User> {
    return this.utilsService.post(UtilsService.apiUSER + 'renvoi', user).pipe(map(res => res), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error?.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error?.error?.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error?.status === 500) { this.presentToast('Probléme Serveur veuillez patienter Svp...', 'danger', 'middle'); }
      console.error(`Backend returned code ${error?.status}, ` + `body was: ${error?.error?.message}`);
    }
    // return an observable with a user-facing error message
    return throwError(error?.error?.message);
  }

  async presentToast(message, color, position) {
    this.myToast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position
    });
    this.myToast.present();
  }

}

