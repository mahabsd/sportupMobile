import { ToastController } from '@ionic/angular';
import { environment } from './../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
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
  public static apiPost = UtilsService.remoteAdress + 'posts/';


  constructor(
    private httpClient: HttpClient
  ) {

  }



  public post(url: string, object: any): Observable<any> {
    // console.log(object);

    return this.httpClient.post(url, object).pipe(catchError(this.formatErrors));
  }

  public patch(url: string, object: any): Observable<any> {

    return this.httpClient.patch(url, object).pipe(catchError(this.formatErrors));
  }
  public put(url: string, object: any): Observable<any> {

    return this.httpClient.put(url, object).pipe(catchError(this.formatErrors));
  }

  public get(url: string): Observable<any> {

    return this.httpClient.get(url).pipe(catchError(this.formatErrors));
  }

  public delete(url: string): Observable<any> {

    return this.httpClient.delete(url).pipe(catchError(this.formatErrors));
  }
  private formatErrors(error: any) {
    return throwError(error.error);

  }


}
