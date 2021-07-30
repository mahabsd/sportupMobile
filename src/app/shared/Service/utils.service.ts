import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
// import { DatePipe } from "@angular/common";
import { StorageService } from './storage.service';
import { ToastController } from '@ionic/angular';


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
  public static apiComment = UtilsService.remoteAdress + 'comments/';
  token: any;
  myToast: any;
  header: any;

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService,
    private toastCtrl: ToastController
  ) {
    this.jwt().subscribe(res => this.header = res);
    // this.jwt();
  }
  public async presentToast(message, color, position) {
    this.myToast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position
    });
    this.myToast.present();
  }
  jwt() {
    return this.storage.get(environment.token).pipe(map(res => {
      this.token = res;
      if (this.token) {
        const headers = new HttpHeaders({ authorization: 'Bearer ' + this.token });
        //   console.log(headers);
        return { headers };
      }
    }));

  }
  public post(url: string, object: any): Observable<any> {
    // console.log(this.header);

    return this.httpClient
      .post(url, object, this.header)
      .pipe(map((res) => res), catchError(this.formatErrors));
  }

  public patch(url: string, object: any): Observable<any> {
    return this.httpClient.patch(url, object, this.header).pipe(map((res) => res));
  }
  public put(url: string, object: any): Observable<any> {
    return this.httpClient.put(url, object, this.header).pipe(map((res) => res));
  }

  public get(url: string): Observable<any> {
    const headers = new HttpHeaders({ authorization: 'Bearer ' + this.token });
    return this.httpClient.get(url, this.header).pipe(map((res) => res));
  }

  public delete(url: string): Observable<any> {
    return this.httpClient.delete(url, this.header).pipe(map((res) => res));
  }
  private formatErrors(error: any) {
    return throwError(error.error);

  }


}
