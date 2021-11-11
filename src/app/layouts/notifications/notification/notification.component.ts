import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CommentService } from '../../../Shared/Service/comment.service';
import { PostService } from '../../../shared/Service/post.service';
import {} from "moment"
import * as moment from 'moment';

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
  timeAgo:any
  apiImgUser = `${environment.apiImg}User/`;
  apiImg = `${environment.apiImg}Post/`;
  constructor(private postService: PostService,
    private commentService: CommentService)
    { }
    getMe() {
      this.getCommentByPost()
      this.timeAgo = moment(this.notif.createdAt).startOf('second').fromNow()
      // console.log(this.notif.text);
    }

  getCommentByPost() {
    forkJoin({
      comments: this.commentService.getCommentByService(this.notif.postId._id),
      images: this.postService.getPost(this.notif.postId._id),
      mediafiles: this.postService.getPost(this.notif.postId._id),

    }).subscribe(({ comments, images, mediafiles}) => {
      this.comments = comments;
      this.images = images.images;
      this.mediafiles = mediafiles.mediafiles;
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
