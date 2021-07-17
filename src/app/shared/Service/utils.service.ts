import { ToastController } from '@ionic/angular';
import { environment } from './../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
// import { DatePipe } from "@angular/common";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public static remoteAdress = environment.apiUrl;
  token= new BehaviorSubject('');
  public static apiUSER = UtilsService.remoteAdress + 'users/';
  public static apiACTION = UtilsService.remoteAdress + 'actions/';
  public static apiCLIENT = UtilsService.remoteAdress + 'clients/';
  public static apiOPERATION = UtilsService.remoteAdress + 'operations/';
  public static apiPost = UtilsService.remoteAdress + 'posts/';

  constructor(private httpClient: HttpClient, private storage: StorageService) {
    console.log(this.jwt());
  }

  public post(url: string, object: any): Observable<any> {
    // console.log(object);
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.httpClient
      .post(url, object, {headers})
      .pipe(map((res) => res));
  }

  public patch(url: string, object: any): Observable<any> {
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.httpClient.patch(url, object, { headers }).pipe(map((res) => res));
  }
  public put(url: string, object: any): Observable<any> {
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.httpClient.put(url, object, { headers }).pipe(map((res) => res));
  }

  public get(url: string): Observable<any> {
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.httpClient.get(url, { headers }).pipe(map((res) => res));
  }

  public delete(url: string): Observable<any> {
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.httpClient.delete(url, { headers }).pipe(map((res) => res));
  }
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  jwt(){

    return this.storage.get(environment.token).pipe(
      map((res) => {
        this.token.next(res);
        console.log(this.token);
        if (this.token) {
          let headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
          //   console.log(headers);
          return { headers:headers };
        }
      })
    );
  }
}
