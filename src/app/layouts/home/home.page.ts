import { User } from './../../shared/Model/User';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from './modal-sheare/modal-sheare.page';
import { IonVirtualScroll, ModalController } from '@ionic/angular';
import { UserService } from '../../shared/Service/user.service';
import { PostService } from '../../shared/Service/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../shared/Model/Post';
import { CommentService } from '../../shared/Service/comment.service';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';
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
  loading = false;
  slideOpts = {
    loop: true,
    effect: 'slide',
    freeModeSticky: false,
    width: 55,
    spaceBetween: 25
  };
  scrolTo = null;
  constructor(
    private active: ActivatedRoute,
    private modalController: ModalController,
    private postService: PostService,
    private commentService: CommentService,
    private userservice: UserService) {
  }

  ngOnInit() {
    this.getMe();
    this.active.data.subscribe((data: { data: any }) => {
      this.loading = true;
      console.log(this.loading);
      this.posts = data['data'].data.sort((a, b) => {
        this.loading = false;
        console.log(this.loading);
        // console.log(a.user.name);
        if (a.user.name < b.user.name) {
          return -1;
        }
        if (a.user.name > b.user.name) {
          return 1;
        }
        return 0;
      });
      // console.log(this.posts);

    });




    // this.getAllPostsByEvent();
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalShearePage,
      componentProps: {

        user: this.user$

      }
    });
    this.getAllPostsByEvent();
    return await modal.present();
  }
  getAllPostsByEvent() {
    this.loading = true;
    this.postService.getAllPosts().pipe(share()).subscribe(res => {
      console.log(res);
      this.loading = false;
      this.posts = res['data'].sort((a, b) => {
        // console.log(a.user.name);
        if (a.user.name < b.user.name) {
          return -1;
        }
        if (a.user.name > b.user.name) {
          return 1;
        }
        return 0;
      });
      // console.log(this.posts);

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
      // console.log(this.user$);

    });
  }
  // Function to call deslike API
  like(event) {
    this.indexPub = event.index;

    this.postService.likePost(event.post).subscribe(res => {
      this.getAllPostsByEvent();
      this.scrolto(this.indexPub);

    });
  }
  // Function to call deslike API
  disLike(event) {

    this.indexPub = event.index;
    this.postService.disLikePost(event.post).subscribe(res => {
      this.getAllPostsByEvent();
      this.scrolto(this.indexPub);

    });

  }

  scrolto(index) {
    console.log(index);

    let arr = this.list.nativeElement.children;

    let item = arr[index];

    item.scrollIntoView();
  }

}
