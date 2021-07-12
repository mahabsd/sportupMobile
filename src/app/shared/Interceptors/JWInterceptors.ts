import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '../Service/storage.service';
import { Platform, ToastController } from '@ionic/angular';
import { retry, catchError } from 'rxjs/operators';
@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  token: any;
  myToast: any;
  constructor(private storage: StorageService, private platform: Platform,
    private toastCtrl: ToastController) { }
  intercept(request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(next);

    this.platform.ready().then(() => {
      this.storage.get(environment.TOKEN).subscribe(async res => {
        if (res) { (this.token = res); }
        return this.token;
      });
    });

    if (this.token) {

      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${this.token}`
        }
      });
    }
    return next.handle(request).pipe(
      // Retry on faillure
      retry(2),

      catchError((error: HttpErrorResponse) => {
        console.error(error);
        if (error.status === 0) {

          this.presentToast('Probléme serveur! \n Veuillez patienter SVP...', 'danger', 'middle');
        }
        if (error.status === 400) {

          this.presentToast(error?.error?.message, 'danger', 'middle');
        }
        return throwError(error);
      }));
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
