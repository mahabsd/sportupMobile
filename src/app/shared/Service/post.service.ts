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
  likePost(post: Post): Observable<Post> {
    return this.utilsService.patch(UtilsService.apiPost + 'likePost', post).pipe(map(res => res));
  }
  disLikePost(post: Post): Observable<Post> {
    return this.utilsService.patch(UtilsService.apiPost + 'dislikePost', post).pipe(map(res => res));
  }
  getAllPosts(page): Observable<Post[]> {
    return this.utilsService.get(`${UtilsService.apiPost}/?page=${page}`).pipe(map(res => res.data.data));
  }

}
