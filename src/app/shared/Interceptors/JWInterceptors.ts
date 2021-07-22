import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../Service/storage.service';
import { Platform, ToastController } from '@ionic/angular';
import { retry, catchError, map } from 'rxjs/operators';
import { AuthService } from '../Auth/auth.service';
import { Storage } from '@ionic/storage';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  token$ = new BehaviorSubject(environment.token);
  myToast: any;
  constructor(
    private storage: StorageService,
    private authService: AuthService,
    private platform: Platform,
    private toastCtrl: ToastController) {






  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(request.url.includes('login'));



    request = request.clone({
      setHeaders: {
        authorization: `Bearer ${this.token$}`
      }
    });

    return next.handle(request);


    //   // Retry on faillure
    //   retry(2),
    //   catchError((error, caught) => {
    //     console.error(error);
    //     if (error.status === 0) {
    //       this.presentToast('Probléme serveur! \n Veuillez patienter SVP...', 'danger', 'middle');
    //     }
    //     if (error.status === 400) {
    //       this.presentToast(error?.error?.message, 'danger', 'middle');
    //     }
    //     // if (error.status === 401) {
    //     //   this.handleAuthError();
    //     //   return of(error);
    //     // }
    //     if (error.status === 500) {
    //       this.handleServer();
    //       return of(error);
    //     }
    //     throw error;
    //   }));

  }
  getToken(): Observable<any> {
    return this.storage.get(environment.token).pipe(map(res => { this.token$ = res; }));
  }
  public jwt() {


    this.getToken();
    const headers = new HttpHeaders({ authorization: 'Bearer ' + this.token$ });
    //   console.log(headers);
    return ({ headers });
  }

  private typeError() {
    return this.presentToast('Votre session est expiré', 'danger', 'top');
  }
  private handleAuthError() {
    this.authService.logout();
    this.typeError();
  }
  private handleServer() {
    this.presentToast('Probléme Serveur veuillez patienter Svp...', 'danger', 'middle');
  }
  private async presentToast(message, color, position) {
    this.myToast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position
    }).then((toastData) => {
      toastData.present();
    });
  }

}
