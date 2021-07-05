import { ToastController } from '@ionic/angular';
import { environment } from './../../../environments/environment';
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  public static REMOTE_ADDRESS = environment.apiUrl;


  public static API_USER = UtilsService.REMOTE_ADDRESS + 'users/';
  public static API_ACTION = UtilsService.REMOTE_ADDRESS + 'actions/';
  public static API_CLIENT = UtilsService.REMOTE_ADDRESS + 'clients/';
  public static API_OPERATION = UtilsService.REMOTE_ADDRESS + 'operations/';


  constructor(
    private httpClient: HttpClient,
    private toastCtrl:ToastController
    // private datePipe: DatePipe
  ) {

  }
 


  public post(url: string, object: any): Observable<any> {
    // console.log(object);

    return this.httpClient.post(url, object)
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