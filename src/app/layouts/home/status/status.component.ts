
import { EventEmitter, Component, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll, NavController, PopoverController, ModalController } from '@ionic/angular';
import { ReactionsPage } from '../reactions/reactions.page';
import { PostService } from '../../../shared/Service/post.service';
import { Post } from '../../../shared/Model/Post';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/Model/user';
import { UserService } from '../../../shared/Service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../../shared/Model/Comment';
import { CommentService } from '../../../shared/Service/comment.service';
import { CommentsPage } from '../comments/comments.page';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  @Input() post: any;
  @Input() index: any;
  @Input() user: any;
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

    private popoverCtrl: PopoverController) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    // this.getMe();
  }
  ngOnInit() {
// console.log(this.post)
    // eslint-disable-next-line no-underscore-dangle
    this.id = JSON.stringify(this.user?._id);
    // console.log(this.post?.likedBy.indexOf(this.id));
    // console.log(typeof (this.id));
    this.getCommentByPost();
  }

  async showReactions(ev) {
    this.press++;
    const reactions = await this.popoverCtrl.create(
      {
        component: ReactionsPage,
        event: ev
      }
    );

    await reactions.present();
    const { role } = await reactions.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  onTap() {
    console.log('ok');

    this.tap++;
  }

  like(post) {
    console.log(this.index);

    this.likeFn.emit({ post, index: this.index });
  }
  disLike(post) {
    console.log(this.index);

    this.disLikeFn.emit({ post, index: this.index });
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
      component: CommentsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        post,
        comments: this.comments

      }
    });
    await modal.present();

    await modal.onWillDismiss().then((result) => {
      this.getCommentByPost();
            console.log( this.post._id);

    });


  }
  getCommentByPost() {
    // eslint-disable-next-line no-underscore-dangle
    this.commentService.getCommentByService(this.post._id).subscribe(arg => {
      // console.log(arg);
      this.comments = arg;
    });

  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
