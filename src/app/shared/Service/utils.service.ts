import { ToastController } from '@ionic/angular';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public static remoteAdress = environment.apiUrl;


  public static apiUSER = UtilsService.remoteAdress + 'users/';
  public static apiACTION = UtilsService.remoteAdress + 'actions/';
  public static apiCLIENT = UtilsService.remoteAdress + 'clients/';
  public static apiOPERATION = UtilsService.remoteAdress + 'operations/';


  constructor(
    private httpClient: HttpClient
  ) {

  }



  public post(url: string, object: any): Observable<any> {
    // console.log(object);

    return this.httpClient.post(url, object);
  }

  public patch(url: string, object: any): Observable<any> {

    return this.httpClient.patch(url, object);
  }
  public put(url: string, object: any): Observable<any> {

    return this.httpClient.put(url, object);
  }

  public get(url: string): Observable<any> {

    return this.httpClient.get(url);
  }

  public delete(url: string): Observable<any> {

    return this.httpClient.delete(url);
  }



}
