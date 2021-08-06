import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { Comment } from '../Model/Comment';
import { map } from 'rxjs/operators';
import { Post } from '../Model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private apiService: UtilsService) { }
  addComment(comment: Comment, post: Post):Observable<Comment> {
    return this.apiService.post(`${UtilsService.apiPost}${post}/comments`, comment).pipe(map((res) => res));
  }
  getCommentByService(post): Observable<Comment[]> {
    return this.apiService.get(`${UtilsService.apiPost}${post}/comments`).pipe(map((res) => res.data.data));
  }




  deleteComment(id: any) {
    return this.apiService.delete(`${UtilsService.apiComment}`+id);
  }
}


