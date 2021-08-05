import { User } from './../../shared/Model/User';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from './modal-sheare/modal-sheare.page';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../shared/Service/user.service';
import { PostService } from '../../shared/Service/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../shared/Model/Post';
import { CommentService } from '../../shared/Service/comment.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any = [];
  page = 1;
  maximumPages = 10;
  user$: any = [];
  slideOpts = {
    loop: true,
    effect: 'slide',
    freeModeSticky: false,
    width: 55,
    spaceBetween: 25
  };
  constructor(
    private active: ActivatedRoute,
    private modalController: ModalController,
    private postService: PostService,
    private commentService: CommentService,
    private userservice: UserService) {
  }

  ngOnInit() {
    this.getMe();
    this.active.data.subscribe((data: { posts: Post }) => {
      this.posts = data.posts;
    })


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
    this.postService.getAllPosts().subscribe(res => {
      console.log(res);

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
      this.user$ = res;
      // console.log(this.user$);

    });
  }
  // Function to call deslike API
  like(post) {

    this.postService.likePost(post).subscribe(res => {

    });
  }
  // Function to call deslike API
  disLike(post) {

    this.postService.disLikePost(post).subscribe(res => {


    });

  }



}
