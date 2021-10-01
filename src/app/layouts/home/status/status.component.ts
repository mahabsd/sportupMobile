import {
  EventEmitter,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  IonVirtualScroll,
  NavController,
  PopoverController,
  ModalController,
  LoadingController,
} from '@ionic/angular';
import { ReactionsPage } from '../reactions/reactions.page';
import { PostService } from '../../../Shared/Service/post.service';
import { Post } from '../../../Shared/Model/Post';
import { forkJoin, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Comment } from '../../../Shared/Model/Comment';
import { CommentService } from '../../../Shared/Service/comment.service';
import { CommentsPage } from '../comments/comments.page';
import { ParametresComponent } from '../../../component/parametres/parametres.component';
import { environment } from '../../../../environments/environment';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ImageProfileComponent } from '../../coachprofile/image-profile/image-profile.component';
import { UserService } from 'src/app/Shared/Service/user.service';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  apiImgUser = `${environment.apiImg}User/`;
  apiImg = `${environment.apiImg}Post/`;
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
  mediafiles: any = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Post$: Observable<Post[]>;
  // user: any;
  tap = 0;
  press = 0;
  liked = false;
  bookmarked = false;
  id;
  isUserConnected
  loading: any;
  constructor(
    private commentService: CommentService,
    private postService: PostService, private userervice: UserService,
    private favorisService: FavorisService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private popoverCtrl: PopoverController,
    private videoPlayer: VideoPlayer
  ) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
  async ngOnInit() {
    //console.log(this.post);

    await this.getCommentByPost();
  }

  getMe() {
    this.userervice.getMe().subscribe((res) => {
      this.isUserConnected = res.data.data._id;
    });
  }

  async showReactions(ev) {
    this.press++;
    const reactions = await this.popoverCtrl.create({
      component: ReactionsPage,
      event: ev,
    });

    await reactions.present();
    const { role } = await reactions.onDidDismiss();
  }

  onTap() {
    this.tap++;
  }

  like(post, event) {
    this.post.iconLike = event.id;
    this.likeFn.emit({ post, index: this.index });
  }
  disLike(post, event) {
    this.post.iconLike = event.id;
    this.disLikeFn.emit({ post, index: this.index });
  }

  onComment() { }
  share() { }
  bookmark(post) {
    this.favorisService.addFavoris(post?._id).subscribe((res) => {
      //console.log(res);
      this.bookmarked = true;
    });
  }
  unBookmark(post) {
    this.favorisService.addFavoris(post?._id).subscribe((res) => {
      //console.log(res);
      this.bookmarked = false;
    });
  }

  async presentModal(post) {
    const modal = await this.modalController.create({
      component: CommentsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        post,
        comments: this.comments,
      },
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => {
      this.getCommentByPost();
    });
  }

  getExt(fileName) {
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    //console.log(ext);
    return ext;
  }

  async displayImage(url: any) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    //console.log(url);

    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        image: url,
      },
    });
    return await modal.present();
  }

  async displayVideo(url: any) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    // console.log(url);

    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        video: url,
      },
    });
    return await modal.present();
  }
  playvid(url) {
    this.videoPlayer.play(url).then(() => {
      //console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  getCommentByPost() {
    forkJoin({
      comments: this.commentService.getCommentByService(this.post._id),
      images: this.postService.getPost(this.post._id),
      mediafiles: this.postService.getPost(this.post._id),
    }).subscribe(({ comments, images, mediafiles }) => {
      this.comments = comments;
      this.images = images.images;
      this.mediafiles = mediafiles.mediafiles;
    });
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ParametresComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        post: this.post,
      },
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    location.reload();
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000,
      spinner: 'bubbles',
    });
    await this.loading.present();
  }
}
