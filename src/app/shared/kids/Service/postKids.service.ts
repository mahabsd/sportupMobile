import { ApiService } from './api.service';
import { UtilsService } from '../../Service/utils.service';
import { Post } from 'src/app/shared/Model/Post';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StorageService } from '../../Service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostKidsService {

  constructor(
    private utilsService: ApiService,
    private storage: StorageService) { }
    getAllPostsKids(): Observable<Post[]> {
     console.log(`${UtilsService.apiPost}?type=kids`);
    // return this.utilsService.get(`${UtilsService.apiPost}/?page=${page}&limit=5`).pipe(map(res => res.data));
    return this.utilsService.get(`${UtilsService.apiPost}?type=kids`).pipe(map(res => res.data));
  }
  likePostKids(post: Post): Observable<Post> {
    return this.utilsService.patch(UtilsService.apiPost + 'likePost', post).pipe(map(res => res));
  }
  disLikePostKids(post: Post): Observable<Post> {
    return this.utilsService.patch(UtilsService.apiPost + 'dislikePost', post).pipe(map(res => res));
  }
  addComment(comment: Comment, post: Post) {
    return this.utilsService.post(`${UtilsService.apiPost}${post}/comments`, comment).pipe(map((res) => res));
  }
  getCommentByService(post) {
    return this.utilsService.get(`${UtilsService.apiPost}${post}/comments`).pipe(map((res) => res.data.data));
  }
  deletePostKids(id: any) {
    return this.utilsService.delete(`${UtilsService.apiPost}`+id);
  }
}
