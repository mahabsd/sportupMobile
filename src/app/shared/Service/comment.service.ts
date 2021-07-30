import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { Comment } from '../Model/Comment';
import { map } from 'rxjs/operators';
import { Post } from '../../../../../sportUpWeb/src/app/Shared/Model/post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private apiService: UtilsService) { }
  addComment(comment: Comment, post: Post) {
    return this.apiService.post(`${UtilsService.apiPost}${post}/comments`, comment).pipe(map((res) => res));
  }
  getCommentByService(post) {
    return this.apiService.get(`${UtilsService.apiPost}${post}/comments`).pipe(map((res) => res.data.data));
  }
}
