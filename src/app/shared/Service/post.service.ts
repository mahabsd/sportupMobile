import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { Post } from '../Model/Post';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private utilsService: UtilsService) { }
  createPost(post: Post): Observable<Post> {
    return this.utilsService.post(UtilsService.apiPost, post).pipe(map(res => res));
  }
  getPost(): Observable<Post[]> {
    return this.utilsService.get(UtilsService.apiPost).pipe(map(res => res));
  }
}
