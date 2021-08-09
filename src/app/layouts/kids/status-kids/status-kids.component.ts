/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { CommentsPage } from './../../home/comments/comments.page';
/* eslint-disable no-trailing-spaces */
import { EventEmitter, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll, NavController, PopoverController, ModalController } from '@ionic/angular';

import { PostService } from '../../../shared/Service/post.service';
import { Post } from '../../../shared/Model/Post';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/Model/user';
import { UserService } from '../../../shared/Service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../../shared/Model/Comment';
import { CommentService } from '../../../shared/Service/comment.service';
import { PostKidsService } from 'src/app/shared/kids/Service/postKids.service';
import { CommentsKidsPage } from '../comments-kids/comments-kids.page';

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
  id;
  constructor(private navCtrl: NavController,
    private commentService: CommentService,
    private modalController: ModalController,
    private postKidsService: PostKidsService,
    private popoverCtrl: PopoverController) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    // this.getMe();
  }
  ngOnInit() {
    // eslint-disable-next-line no-underscore-dangle
    this.id = JSON.stringify(this.user?._id);

    console.log("zzzzzz"+  JSON.stringify(this.user?._id));
    console.log("zzzzzz"+ this.id);

    this.getCommentByPost();
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
       userid: this.user?._id
      }
    });
    await modal.present();

    await modal.onWillDismiss().then((result) => {
      this.getCommentByPost();


    });


  }



  getCommentByPost() {
    // eslint-disable-next-line no-underscore-dangle
    this.commentService.getCommentByService(this.post._id).subscribe(arg => {
      this.comments = arg;
      console.log(this.comments)
    });

  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
