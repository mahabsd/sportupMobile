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
    private utilsService: UtilsService,
    private storage: StorageService) { }
    getAllPostsKids(): Observable<Post[]> {
     console.log(`${UtilsService.apiPost}?type=kids`);
    // return this.utilsService.get(`${UtilsService.apiPost}/?page=${page}&limit=5`).pipe(map(res => res.data));
    return this.utilsService.get(`${UtilsService.apiPost}?type=kids`).pipe(map(res => res.data));
  }
  likePostKids(post: Post): Observable<Post> {
    return this.utilsService.patch(UtilsService.apiPost + 'like', post).pipe(map(res => res));
  }
  disLikePostKids(post: Post): Observable<Post> {
    return this.utilsService.patch(UtilsService.apiPost + 'dislike', post).pipe(map(res => res));
  }
}
