import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from './modal-sheare/modal-sheare.page';
import { IonCard, IonVirtualScroll, LoadingController, ModalController, ToastController } from '@ionic/angular';


import { UserService } from '../../Shared/Service/user.service';
import { PostService } from '../../Shared/Service/post.service';
import { CommentService } from '../../Shared/Service/comment.service';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';
import { EventService } from 'src/app/shared/Service/event.service';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { FollowerService } from '../../shared/Service/follower.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) list: ElementRef;
  menuLabels = ['Tout', 'Favoris', 'Abonnement']
  indexPub = null;
  posts: any = [];
  tout;
  page = 1;
  maximumPages = 10;
  user$: any = [];
  loading: any;
  slideOpts = {
    loop: true,
    effect: 'slide',
    freeModeSticky: false,
    width: 55,
    spaceBetween: 25
  };
  scrolTo = null;
  isScrollTop = false;
  messages = [];
  lang;
  currentUser = '';
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private toastCtrl: ToastController,
    private postService: PostService,
    private eventService: EventService,
    private userService: UserService,
    private translate: TranslateService,
    public storage: Storage) {
    translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
      storage.get('lan').then((val) => {
        if(val)
         translate.use(val);
      });
  }

  async ngOnInit() {
    this.getMe();
    this.getAllPostsByEvent();
  }


  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }

  getAllPostsByEvent(event?) {
    this.userService.getMe().subscribe(res => {
      this.user$ = res.data.data;
      this.postService.getAllfollowingPosts(this.page, this.user$._id).pipe(share()).subscribe(res => {
        this.posts = this.posts.concat(res.data.data);
        if (event) {
          event.target.complete();
        }
      });
    });

  }
  loadMore(event) {
    this.page++;
    this.getAllPostsByEvent(event);
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalShearePage,
      componentProps: {
        user: this.user$
      }
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => {
    });
  }

  doRefresh(event) {
    this.posts = [];
    setTimeout(() => {
      this.getAllPostsByEvent();
      event.target.complete();
    }, 1000);
  }

  getMe() {
    this.userService.getMe().subscribe(res => {
      this.user$ = res.data.data;
    });
  }

  // Function to call like API
  like(event) {
    this.indexPub = event.index;
    this.postService.likePost(event.post).subscribe(res => {
    });
  }
  // Function to call deslike API
  disLike(event) {
    this.indexPub = event.index;
    this.postService.disLikePost(event.post).subscribe(res => {
    });
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await this.loading.present();
  }
  async presentToast() {
    const myToast = await this.toastCtrl.create({
      message: 'ok',
      duration: 2000,
      color: 'success',
      position: 'top'
    }).then((toastData) => {
      toastData.present();
    });
  }

}
