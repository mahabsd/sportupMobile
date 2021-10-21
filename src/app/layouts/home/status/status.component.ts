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
import { PostDisplayComponent} from '../../post-display/post-display.component';
import { Router } from '@angular/router';
import { FollowerService } from 'src/app/shared/Service/follower.service';

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
  apiImgUser = `${environment.apiImg}User/`;
  apiImg = `${environment.apiImg}Post/`;
  commentForm: FormGroup;
  comment: Comment = new Comment();
  longPressActive = false;
  posts: any = [];
  comments: any = [];
  images: any = [];
  mediafiles: any = [];
  newMediaFiles: any= [];
  secondNewMediaFiles: any= [];
  thirdNewMediaFiles: any= [];
  tempMedia: any= [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Post$: Observable<Post[]>;
  // user: any;
  tap = 0;
  press = 0;
  liked = false;
  bookmarked = false;
  id;
  iduser1;
  etatSuivre = false;
  follower = false;
  idFollowtoDelete;
  idprofilePassed;
  isUserConnected;
  loading: any;
  shared= false;
  constructor(
    private commentService: CommentService,
    private postService: PostService, private userervice: UserService,
    private favorisService: FavorisService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private popoverCtrl: PopoverController,
    private videoPlayer: VideoPlayer,    public router: Router  ,  private followerService: FollowerService,


  ) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
  async ngOnInit() {
this.getMe()
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
  share(post) {
    this.shared = true;
    this.favorisService.addShared(post?._id).subscribe((res) => {
      this.shared = true;
    });
  }
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

  async displayImage(a: any) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    //console.log(url);
    console.log(this.mediafiles);
    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        image: a,
      },
    });
    return await modal.present();
  }

  async displayContent(files){
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
    // console.log(url);

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
      tempMedia: this.postService.getPost(this.post._id),
    }).subscribe(({ comments, images, mediafiles,tempMedia }) => {
      this.comments = comments;
      this.images = images.images;
      this.mediafiles = mediafiles.mediafiles;
      this.tempMedia = mediafiles.mediafiles;
      console.log(this.mediafiles);

      if ( this.tempMedia.length<4){
        this.newMediaFiles= this.tempMedia.splice(0,1);
      }
      if (this.tempMedia.length>3){
        this.newMediaFiles=this.tempMedia.slice(0,1);
        this.thirdNewMediaFiles=this.tempMedia.slice(1,3);
        this.secondNewMediaFiles=this.tempMedia.splice(3,this.mediafiles.length);
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
              this.router.navigate(['profil',iduserpassed,'adulte']);
              console.log('nope');
            } else {
              console.log(res);
              this.router.navigate(['menu/tabs/layouts/coachprofile',iduserpassed,'followed']);
            }
          });
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
