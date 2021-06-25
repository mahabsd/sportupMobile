import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { User } from './user';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
@Injectable({
  providedIn: 'root'
})
export class SigninService {
  base_path  = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    // Handle API errors
    handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    }
  // Create a new item
    createItem(item): Observable<User> {
      return this.http
        .post<User>(this.base_path, JSON.stringify(item), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }
      // Get single student data by ID
  getItem(id): Observable<User> {
    return this.http
      .get<User>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  // Get students data
  getList(): Observable<User> {
    return this.http
      .get<User>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  // Update item by id
  updateItem(id, item): Observable<User> {
    return this.http
      .put<User>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
    // Delete item by id
    deleteItem(id) {
      return this.http
        .delete<User>(this.base_path + '/' + id, this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
    }
}