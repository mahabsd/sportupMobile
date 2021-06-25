import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  base_path = 'http://localhost:3000/users';
  MiId = '5fbbb73cae15672b0cee8717';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
  //get profile user connected
  GetProfile(): Observable<any> {
    return this.http
      .get<any>(this.base_path + '/' + this.MiId,  this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
    //get publication user connected
  GetPubLicationImage(item): Observable<any> {
    return this.http
      .post<any>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
