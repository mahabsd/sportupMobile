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
  PopoverController,
  ModalController,
  LoadingController,
} from '@ionic/angular';
import { ReactionsPage } from '../reactions/reactions.page';
import { PostService } from '../../../Shared/Service/post.service';
import { Post } from '../../../Shared/Model/Post';
import { forkJoin, Observable } from 'rxjs';
import { Comment } from '../../../Shared/Model/Comment';
import { CommentService } from '../../../Shared/Service/comment.service';
import { CommentsPage } from '../comments/comments.page';
import { ParametresComponent } from '../../../component/parametres/parametres.component';
import { environment } from '../../../../environments/environment';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ImageProfileComponent } from '../../coachprofile/image-profile/image-profile.component';
import { UserService } from 'src/app/Shared/Service/user.service';
import { PostDisplayComponent } from '../../post-display/post-display.component';
import { Router } from '@angular/router';
import { FollowerService } from 'src/app/shared/Service/follower.service';
import { NotificationsService } from 'src/app/shared/Service/notifications.service';
import { Socket } from 'ngx-socket-io';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventListModalComponent } from '../../planning/event-list-modal/event-list-modal.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  @Input() post: any;
  @Input() index: any;
  @Input() user: any;
  @Output() likeFn = new EventEmitter();
  @Output() disLikeFn = new EventEmitter();
  @Input  () isBookMarked: boolean;
  apiImgUser = `${environment.apiImg}User/`;
  apiImg = `${environment.apiImg}Post/`;
  commentForm: FormGroup;
  comment: Comment = new Comment();
  longPressActive = false;
  posts: any = [];
  comments: any = [];
  images: any = [];
  mediafiles: any = [];
  newMediaFiles: any = [];
  secondNewMediaFiles: any = [];
  thirdNewMediaFiles: any = [];
  tempMedia: any = [];
  Post$: Observable<Post[]>;
  tap = 0;
  press = 0;
  liked = false;
  bookmarked = false;
  showComment = false;
  id;
  iduser1;
  etatSuivre = false;
  follower = false;
  idFollowtoDelete;
  idprofilePassed;
  isUserConnected;
  loading: any;
  shared = false;
  notif: any = { reciever: '', userOwner: '', text: '', postId: '' };
  iduser;
  idProfilePassed;
  user$: any;
  name: any;
  constructor(
    private commentService: CommentService,
    private postService: PostService,
    private userervice: UserService,
    private favorisService: FavorisService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private popoverCtrl: PopoverController,
    private videoPlayer: VideoPlayer,
    public router: Router,
    private followerService: FollowerService,
    private notificationsService: NotificationsService,
    private socket: Socket,
    private userService: UserService,

  ) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
  async ngOnInit() {
    this.getMe();
    await this.getCommentByPost();
    this.commentForm = new FormGroup({
      contentControl: new FormControl('', Validators.required)
    });
  }

  getMe() {
    this.userervice.getMe().subscribe((res) => {
      this.isUserConnected = res.data.data._id;
      this.user$ = res.data.data;
    });
  }


  showComments() {
    this.showComment = true;
  }
  hideComments() {
    this.showComment = false;
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

    this.socket.connect();
    this.socket.emit('notifications', { note: 'hey'});
    this.socket.fromEvent('notifications').subscribe( (res) => {
      this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
      this.notif.reciever = post.user._id;
      this.notif.userOwner = this.user$._id;
      this.notif.text = "a aimé votre status";
      this.notif.postId = post._id;
    this.createNotif(this.notif);
    });
  }
  disLike(post, event) {
    this.post.iconLike = event.id;
    this.disLikeFn.emit({ post, index: this.index });
  }

   sendComment(post)  {
    this.comments = [];
    this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
    this.commentService.addComment(this.comment, post._id).subscribe(res =>  {

    });
    this.comment = new Comment();
    this.getCommentByPost();

     this.userService.getMe().subscribe((res) => {
      this.user$ = res.data.data;
      this.notif.reciever = post.user._id;
      this.notif.userOwner = this.user$._id;
      this.notif.text = "a commenté votre status";
      this.notif.postId = post._id
      this.socket.connect();
      this.socket.emit('notifications', { msg: 'hey' });
      this.socket.fromEvent('notifications').subscribe( (res) => {
      this.createNotif(this.notif);
      });
    });

  }
  share(post) {
    this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
    this.shared = true;
    this.notif.reciever = post.user._id;
    this.notif.userOwner = this.user$._id;
    this.notif.text = "a partagé votre status";
    this.notif.postId = post._id
    this.socket.connect();
    this.socket.emit('notifications', { note: 'hey'});
    this.socket.fromEvent('notifications').subscribe((res) => {
      this.createNotif(this.notif);
    });
    this.favorisService.addShared(post?._id).subscribe((res) => {
      this.shared = true;
    });
  }
  bookmark(post) {
    this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
    this.notif.reciever = post.user._id;
    this.notif.userOwner = this.user$._id;
    this.notif.text = "a enregistré votre status";
    this.notif.postId = post._id
    this.socket.connect();
    this.socket.emit('notifications', { note: 'hey' });
    this.socket.fromEvent('notifications').subscribe((res) => {
      this.createNotif(this.notif);
    });
    this.favorisService.addFavoris(post?._id).subscribe((res) => {
      this.bookmarked = true;
    });
  }
  unBookmark(post) {
    this.favorisService.addFavoris(post?._id).subscribe((res) => {
      this.bookmarked = false;
    });
  }



  getExt(fileName) {
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    return ext;
  }

  async displayImage(a: any) {
    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        image: a,
      },
    });
    return await modal.present();
  }

  async displayContent(files) {
    const modal = await this.modalController.create({
      component: PostDisplayComponent,
      cssClass: 'imageModal',
      componentProps: {
        post: files,
      },
    });
    return await modal.present();
  }

  async displayVideo(file: any) {
    // eslint-disable-next-line @typescript-eslint/naming-convention

    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        video: file,
      },
    });
    return await modal.present();
  }
  playvid(url) {
    this.videoPlayer.play(url).then(() => {
    }).catch(err => {
      console.log(err);
    });
  }
  getCommentByPost() {
    forkJoin({
      comments: this.commentService.getCommentByService( this.post.id),
      images: this.postService.getPost(this.post.post?._id || this.post.id),
      mediafiles: this.postService.getPost(this.post.post?._id || this.post.id),
      tempMedia: this.postService.getPost(this.post.post?._id || this.post.id),
    }).subscribe(({ comments, images, mediafiles }) => {
      this.comments = comments;
      this.images = images.images;
      this.mediafiles = mediafiles.mediafiles;
      this.tempMedia = mediafiles.mediafiles;
      if (this.tempMedia.length < 4) {
        this.newMediaFiles = this.tempMedia.splice(0, 1);
      }
      if (this.tempMedia.length > 3) {
        this.newMediaFiles = this.tempMedia.slice(0, 1);
        this.thirdNewMediaFiles = this.tempMedia.slice(1, 3);
        this.secondNewMediaFiles = this.tempMedia.splice(3, this.mediafiles.length);
      }
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

  getfollow(iduserpassed) {
    this.userervice.getMe().subscribe(
      (response) => {
        this.iduser1 = response.data.data.id;
        this.followerService.getFollow(iduserpassed, this.iduser1)
          .subscribe((res) => {
            if (res == null) {
              this.router.navigate(['profil', iduserpassed, 'adulte']);
            } else {
              this.router.navigate(['menu/tabs/layouts/coachprofile', iduserpassed, 'followed']);
            }
          });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  createNotif(notif: any) {
    this.notificationsService.postNotification(notif).subscribe();
  }

}
