import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Auth/auth.service';
import { StorageService } from '../Service/storage.service';
import { Storage } from '@ionic/storage';
@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  token: any;

  list:any=[]
  constructor(private storage: Storage) { }
  intercept(request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    
        this.storage.forEach((value, key, index) => {
          console.log(key);
          
          this.list.push(value);
        }).then((d) => {
          console.log(d);
          console.log(this.list);
          
          return(this.list);
        });
      
     
    this.storage.get('token').then(res => {
      console.log(res);
      this.token = res
      return res;
    })
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return next.handle(request);
  }
}