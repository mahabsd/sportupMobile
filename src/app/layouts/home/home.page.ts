/* eslint-disable @typescript-eslint/dot-notation */
import { User } from '../../Shared/Model/User';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from './modal-sheare/modal-sheare.page';
import { IonVirtualScroll, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { UserService } from '../../Shared/Service/user.service';
import { PostService } from '../../Shared/Service/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../Shared/Model/Post';
import { CommentService } from '../../Shared/Service/comment.service';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) list: ElementRef;
  indexPub = null;
  posts: any = [];
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


  message = '';
  messages = [];
  currentUser = '';
  constructor(

    private active: ActivatedRoute,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private toastCtrl: ToastController,
    private postService: PostService,
    private commentService: CommentService,
    private socket: Socket,
    private userservice: UserService) {
  }

  async ngOnInit() {
    this.getAllPostsByEvent();

    this.getMe();
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

  getAllPostsByEvent(event?) {
    this.postService.getAllPosts(this.page).pipe(share()).subscribe(res => {
      console.log(res);
      this.posts = this.posts.concat(res['data']);
      console.log(this.posts);
      if (event) {
        event.target.complete();
      }
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
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  getMe() {
    this.userservice.getMe().subscribe(res => {
      this.user$ = res.data.data;
    });
  }
  // Function to call deslike API
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



}
