import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { Post } from '../Model/Post';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

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
  getAllPosts(): Observable<Post[]> {
    // console.log(page);
    // return this.utilsService.get(`${UtilsService.apiPost}/?page=${page}&limit=5`).pipe(map(res => res.data));
    return this.utilsService.get(`${UtilsService.apiPost}`).pipe(map(res => res.data));
  }

  getAllPostsKids(): Observable<Post[]> {
     console.log(`${UtilsService.apiPost}?type=kids`);
    // return this.utilsService.get(`${UtilsService.apiPost}/?page=${page}&limit=5`).pipe(map(res => res.data));
    return this.utilsService.get(`${UtilsService.apiPost}?type=kids`).pipe(map(res => res.data));
  }

}
