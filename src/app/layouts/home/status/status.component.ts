
import { EventEmitter, Component, Input, OnInit, Output, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll, NavController, PopoverController, ModalController, LoadingController } from '@ionic/angular';
import { ReactionsPage } from '../reactions/reactions.page';
import { PostService } from '../../../shared/Service/post.service';
import { Post } from '../../../shared/Model/Post';
import { forkJoin, Observable } from 'rxjs';
import { User } from 'src/app/Shared/Model/user';
import { UserService } from '../../../shared/Service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comment } from '../../../shared/Model/Comment';
import { CommentService } from '../../../shared/Service/comment.service';
import { CommentsPage } from '../comments/comments.page';
import { ParametresComponent } from '../../../component/parametres/parametres.component';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  apiImg = `${environment.apiImg}Post/image/`;
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
  images: any = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Post$: Observable<Post[]>;
  // user: any;
  tap = 0;
  press = 0;
  liked = false;
  bookmarked = false;
  id;
  loading: any;
  constructor(private navCtrl: NavController,
    private commentService: CommentService,
    private postService: PostService,
    private modalController: ModalController,
    private loadingController: LoadingController,

    private popoverCtrl: PopoverController) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    // this.getMe();
  }
  async ngOnInit() {
    await this.getCommentByPost();
    // await this.getPost();
    // console.log(this.post);
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

  like(post, event) {
    console.log(event.id);

    this.post.iconLike = event.id;
    this.likeFn.emit({ post, index: this.index });
  }
  disLike(post, event) {

    this.post.iconLike = event.id;
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
      console.log(this.post._id);

    });


  }
  getCommentByPost() {
    // eslint-disable-next-line no-underscore-dangle
    // this.presentLoading();
    forkJoin({

      comments: this.commentService.getCommentByService(this.post._id),
      images: this.postService.getPost(this.post._id),
    }).subscribe(({
      comments, images
    }) => {
      // this.loading.dismiss();
      console.log(images.images);

      this.comments = comments;
      this.images = images.images;

    })
    // console.log(arg);

  }
  // getPost() {
  //   // eslint-disable-next-line no-underscore-dangle
  //   this.postService.getPost(this.post._id).subscribe(res => {
  //     // console.log(res);
  //     for (const item of res?.images) this.images.push(item)
  //     console.log(this.images);

  //   });

  // }


  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ParametresComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        post: this.post
      }

    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    location.reload();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000,
      spinner: "bubbles"
    });
    await this.loading.present();

    // const { role, data } = await this.loading.onDidDismiss();

    // console.log('Loading dismissed!');
  }
}
