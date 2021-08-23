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
  @ViewChild(IonVirtualScroll, { read: ElementRef }) list: ElementRef;
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

    this.getMe();
    await this.presentLoading();
    await this.active.data.subscribe((data: { data: any }) => {


      this.loadingController.dismiss();
      this.posts = this.posts.concat(data['data'].data);
    });
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
    this.presentLoading();
    this.postService.likePost(event.post).subscribe(res => {
      this.loading.dismiss;
      this.scrolto(this.indexPub);
    });
  }
  // Function to call deslike API
  disLike(event) {
    this.indexPub = event.index;
    this.postService.disLikePost(event.post).subscribe(res => {
      this.scrolto(this.indexPub);
    });
  }

  scrolto(index) {
    let arr = this.list.nativeElement.children;
    let item = arr[index];
    item.scrollIntoView();
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: "bubbles"
    });
    await this.loading.present();
  }



}
