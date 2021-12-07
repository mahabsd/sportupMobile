import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CommentService } from '../../../Shared/Service/comment.service';
import { PostService } from '../../../shared/Service/post.service';
import {} from "moment"
import * as moment from 'moment';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { Router } from '@angular/router';
import { Follow } from 'src/app/shared/Model/Follow';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
import { async } from '@angular/core/testing';

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
  timeAgo: any;
  apiImgUser = `${environment.apiImg}User/`;
  apiImg = `${environment.apiImg}Post/`;
  myInformation: any = { userLastName: '', userFirstName: '' };
  iduser: any;
  userRole: any;
  isUser: boolean;
  isKid: boolean;
  userClicked: any;
  follower: boolean;
  idFollowtoDelete: any;
  iduser1: any;
  idprofilePassed: any;
  EtatSuivre: boolean;
  follow: Follow = new Follow();
  notification: any = { reciever: '', userOwner: '', text: '' };

  constructor(private postService: PostService,
    private commentService: CommentService,
    private followerService: FollowerService,
    private userService: UserService,
    public router: Router,
    private notificationsService: NotificationsService
    )
    { }
    ngOnInit() {
      this.follower = false;
      this.getMe();
    }
    getMe() {
      this.getCommentByPost();
      this.timeAgo = moment(this.notif.createdAt).startOf('second').fromNow();
    }

  getCommentByPost() {
    this.notif.postId?
    forkJoin({comments: this.commentService.getCommentByService(this.notif.postId?._id),
      images: this.postService.getPost(this.notif.postId?._id),
      mediafiles: this.postService.getPost(this.notif.postId?._id),}).subscribe(({ comments, images, mediafiles}) => {
      this.comments = comments;
      this.images = images.images;
      this.mediafiles = mediafiles.mediafiles;
    }):null;
  }
  getExt(fileName) {
    const ext = fileName?.substr(fileName.lastIndexOf('.') + 1);
    return ext;
  }
  getUser() {
    this.userService.getMe().subscribe(
      (response) => {
        this.myInformation.userLastName = response.data.data.name;
        this.iduser = response.data.data.id;
        this.userRole = response.data.data.role;
        if (this.userRole === 'user') {
          this.isUser = true;
        } else if (this.userRole === 'Kids') {
          this.isKid = true;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  buttonSuivre(id, userOwner, userReceiver) {
   this.follow.userFollowed = userOwner;
   this.follow.userFollowing = userReceiver;
   this.followerService.createFollow(userReceiver, this.follow).subscribe((res)  =>  {
     console.log(res);
    this.follower = true;
    this.createNotif(userReceiver , userOwner);
    this.deleteNotif(id);
   });
 }

deleteNotif(id){
  this.notificationsService.deleteNotif(id).subscribe(res=>console.log(res));
}
createNotif(reciever, userOwner) {
  this.notification.reciever = userOwner;
  this.notification.userOwner = reciever;
  this.notification.text = 'à accepté(e) votre invitation';
  this.notificationsService.postNotification(this.notification).subscribe();
}
}
