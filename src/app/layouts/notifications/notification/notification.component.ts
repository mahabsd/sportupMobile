import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CommentService } from '../../../Shared/Service/comment.service';
import { PostService } from '../../../shared/Service/post.service';
import { UserService } from '../../../Shared/Service/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() notif: any;
  comments: any = [];
  images: any = [];
  mediafiles: any = [];
  user: any = [];
  apiImgUser = `${environment.apiImg}User/`;
  apiImg = `${environment.apiImg}Post/`;
  constructor(private postService: PostService,
    private commentService: CommentService,private userService: UserService,)
    { }
    getMe() {
      this.getCommentByPost()
    }

  getCommentByPost() {
    forkJoin({
      comments: this.commentService.getCommentByService(this.notif.postId._id),
      images: this.postService.getPost(this.notif.postId._id),
      mediafiles: this.postService.getPost(this.notif.postId._id),
      user: this.userService.getUser(this.notif.userOwner?.id),
    }).subscribe(({ comments, images, mediafiles,user }) => {
      this.comments = comments;
      this.images = images.images;
      this.mediafiles = mediafiles.mediafiles;
      this.user = user.data.data
      console.log(this.user);
    });
  }
  getExt(fileName) {
    const ext = fileName?.substr(fileName.lastIndexOf('.') + 1);
    return ext;
  }

  ngOnInit() {
    this.getMe()
  }

}
