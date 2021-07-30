import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { DatePipe } from "@angular/common";
import { ToastController } from '@ionic/angular';
import { environment } from '../../../../../../sportUpWeb/src/environments/environment';
import { StorageService } from '../../Service/storage.service';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public static remoteAdress = environment.apiUrl;
  public static apiUSER = ApiService.remoteAdress + 'users/';
  public static apiACTION = ApiService.remoteAdress + 'actions/';
  public static apiCLIENT = ApiService.remoteAdress + 'clients/';
  public static apiOPERATION = ApiService.remoteAdress + 'operations/';
  public static apiPost = ApiService.remoteAdress + 'posts/';
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
