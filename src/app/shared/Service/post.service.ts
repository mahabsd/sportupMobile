import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { Post } from '../Model/Post';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from 'src/environments/environment';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private utilsService: UtilsService,
    private storage: StorageService) { }
  createPost(post: Post): Observable<Post> {
    return this.utilsService.post(UtilsService.apiPost, post).pipe(map(res => res));
  }
  getPost(): Observable<Post[]> {
    return this.utilsService.get(UtilsService.apiPost).pipe(map(res => res));
  }
  private async jwt() {
    return new Promise((resolve) => {

      var token;
      this.storage.get(environment.token).subscribe(async res => {

        token = await res;
        console.log(token);
        resolve(token);
        if (token) {
          let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
          //   console.log(headers);
          return ({ headers: headers });
        }
      })
    });


  }
}
