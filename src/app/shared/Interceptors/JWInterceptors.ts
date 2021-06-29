import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../Auth/auth.service';
@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem(environment.TOKEN);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(request);
    }
}