import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Auth/auth.service';
import { StorageService } from '../Service/storage.service';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  token: any;
  constructor(private storage: StorageService, private platform: Platform) { }
  intercept(request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    this.platform.ready().then(() => {
      this.storage.get(environment.TOKEN).then(async res => {
        res && (this.token = res)
        console.log(res);
        return this.token;
      })
    });

    if (this.token) {

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
    }
    return next.handle(request);
  }
}