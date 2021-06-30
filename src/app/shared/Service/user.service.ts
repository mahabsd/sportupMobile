import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { map, catchError } from 'rxjs/operators';
import { User } from '../Model/User';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myToast: any;

  constructor(private utilsService: UtilsService,
    public toastCtrl: ToastController) { }
  getMe() {
    return this.utilsService.get(UtilsService.API_USER + 'Me').pipe(map(res => {
      console.log(res);
      return res.data.data;

    }));
  }
  signUp(user: User) {
    return this.utilsService.post(UtilsService.API_USER + 'signup', user).pipe(map(res => {
      return res;
    }), catchError(this.handleError))
  }
  confirmInscription(code:string) {
    return this.utilsService.post(UtilsService.API_USER + 'confirm', code).pipe(map(res => {
      return res;
    }), catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    var errors;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error.message}`);

    }
    // return an observable with a user-facing error message
    return throwError(error.error.message);
  }


}
