import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { Comment } from '../Model/Comment';
import { map } from 'rxjs/operators';
import { Follow } from '../Model/Follow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  constructor(private apiService: UtilsService) { }
  createFollow(follow): Observable<Follow> {
    return this.apiService.post(UtilsService.apiFollower, follow).pipe(map(res => res));
  }

  getFollow(followed,following) {
    return this.apiService.get(`${UtilsService.apiFollower}${followed}/${following}`).pipe(map((res) => res.data.data));

  }

  getFollowForFriends(following,page) {
    return this.apiService.get(`${UtilsService.apiFollower}${following}/${page}/1`).pipe(map((res) => res.data.data));

  }

   /* getCommentByService(post): Observable<Comment[]> {
    return this.apiService.get(`${UtilsService.apiPost}${post}/comments`).pipe(map((res) => res.data.data));
  }


  updateComments(comment: Comment) {

    return this.apiService.patch(`${UtilsService.apiComment}${comment.id}`,comment);
  }
*/
  deleteFollow(id: any) {
    return this.apiService.delete(`${UtilsService.apiFollower}`+id);
  }


}


