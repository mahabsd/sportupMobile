/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { CommentsPage } from '../../../home/comments/comments.page';
/* eslint-disable no-trailing-spaces */
import {
  EventEmitter,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  IonInfiniteScroll,
  IonVirtualScroll,
  NavController,
  PopoverController,
  ModalController,
} from '@ionic/angular';

import { PostService } from '../../../../Shared/Service/post.service';
import { Post } from '../../../../Shared/Model/Post';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/Model/User';
import { UserService } from '../../../../Shared/Service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../../../Shared/Model/Comment';
import { CommentService } from '../../../../Shared/Service/comment.service';
import { PostKidsService } from 'src/app/Shared/kids/Service/postKids.service';
import { AlertController } from '@ionic/angular';
import { CommentsKidsPage } from '../../comments-kids/comments-kids.page';
import { FollowerService } from 'src/app/shared/Service/follower.service';

@Component({
  selector: 'app-status-kids',
  templateUrl: './status-kids.component.html',
  styleUrls: ['./status-kids.component.scss'],
})
export class StatusKidsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  @Input() post: Post;
  @Input() user: User;
  @Output() likeFn = new EventEmitter();
  @Output() disLikeFn = new EventEmitter();
  @Output() refreshPosts = new EventEmitter();

  commentForm: FormGroup;
  comment: Comment = new Comment();
  longPressActive = false;
  posts: any = [];
  comments: any = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Post$: Observable<Post[]>;
  // user: any;
  tap = 0;
  press = 0;
  liked = false;
  bookmarked = false;
  follower = false;
  id;
  isUserConnected: any;
  constructor(
    private navCtrl: NavController,
    public alertController: AlertController,
    private userservice: UserService,
    private commentService: CommentService,
    private modalController: ModalController,
    private postKidsService: PostKidsService,
    private popoverCtrl: PopoverController,
    private userService: UserService,
    private followerService: FollowerService
  ) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    

    const _this = this;


 this.userService.getMe().subscribe(
  (response) => {
    this.followerService
      .getFollow(this.post.user.id, response.data.data._id)
      .subscribe((res) => {
        if (res == null) {
          _this.follower = false;
        
          console.log('mouch follower' + _this.follower);
        } else {
          _this.follower = true;

          console.log(' follower' +_this.follower);
        }
      });
  },
  (error) => 
    console.error(error),
 
);
  }
  ngOnInit() {
   // this.checkSuivi(this.post.user.id);
    // eslint-disable-next-line no-underscore-dangle
    this.id = JSON.stringify(this.user?._id);
    this.getMe();

    this.getCommentByPost();

  }

  async presentAlertConfirm(post) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete this post ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay' + post.id);
            this.deletePost(post._id);
          },
        },
      ],
    });

    await alert.present();
  }

  deletePost(idpost) {
    this.postKidsService.deletePostKids(idpost).subscribe((arg) => {});
    this.refreshPosts.emit();
  }

  onTap() {
    console.log('ok');

    this.tap++;
  }

  like(post) {
    this.likeFn.emit(post);
  }
  disLike(post) {
    this.disLikeFn.emit(post);
  }

  onComment() {
    console.log('comment');
  }
  share() {
    console.log('share');
  }
  bookmark() {
    console.log('bookmark');
    this.bookmarked = true;
  }
  unBookmark() {
    console.log('unbookmark');
    this.bookmarked = false;
  }

  async presentModal(post) {
    const modal = await this.modalController.create({
      component: CommentsKidsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        post,
        comments: this.comments,
        userid: this.user?._id,
      },
    });
    await modal.present();

    await modal.onWillDismiss().then((result) => {
      this.getCommentByPost();
    });
  }

  getCommentByPost() {
    // eslint-disable-next-line no-underscore-dangle
    this.commentService.getCommentByService(this.post._id).subscribe((arg) => {
      this.comments = arg;
      console.log(this.comments);
    });
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.isUserConnected = res.data.data._id;
    });
  }

  async checkSuivi(iduser) {
    this.userService.getMe().subscribe(
      (response) => {
        this.followerService
          .getFollow(iduser, response.data.data._id)
          .subscribe((res) => {
            if (res == null) {
              setTimeout(() => { this.follower = false; }, 0);
              console.log('mouch follower' + iduser);
            } else {
              this.follower = true;
              setTimeout(() => { this.follower = true; }, 0);

              console.log(' follower' + iduser);
            }
          });
      },
      (error) => 
        console.error(error),
     
    );
  }
}
