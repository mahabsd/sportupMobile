import { User } from './../../shared/Model/User';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from './modal-sheare/modal-sheare.page';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../shared/Service/user.service';
import { PostService } from '../../shared/Service/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../shared/Model/Post';
import { CommentService } from '../../shared/Service/comment.service';
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
    private modalController: ModalController,
    private postService: PostService,
    private commentService: CommentService,
    private userservice: UserService) {
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
  ngOnInit() {
    this.getMe();

    this.getAllPostsByEvent();
  }

  getAllPostsByEvent() {
    this.postService.getAllPosts().subscribe(res => {
      // console.log(res);

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
  // getAllPostsByEvent(event?) {
  //   this.postService.getAllPosts(this.page).subscribe(res => {
  //     this.posts = this.posts.concat(res['data']);
  //     // console.log(this.posts);

  //     if (event) {
  //       event.target.complete();
  //     }
  //   });
  // }
  // separateLetter(record, recordIndex, records) {
  //   if (recordIndex == 0) {
  //     return record.user.name[0].toUpperCase();
  //   }
  //   let first_prev = records[recordIndex - 1].user.name[0];
  //   let first_current = record.user.name[0];
  //   if (first_prev != first_current) {
  //     return first_current.toUpperCase();
  //   }
  //   return null;
  // }
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

    console.log('like');
    this.postService.likePost(post).subscribe(res => {
      // console.log(res);
      this.getAllPostsByEvent();
    });
  }
  // Function to call deslike API
  disLike(post) {
    console.log('dislike');
    this.postService.disLikePost(post).subscribe(res => {
      // console.log(res);
      this.getAllPostsByEvent();

    });

  }
  // Function to load data when we reach the bottom of the page
  loadMore(event) {
    this.page++;
    // this.getAllPostsByEvent(event);
    this.getAllPostsByEvent();
    // console.log(this.page);
    if (this.page === this.maximumPages) {
      event.target.disabled = true;
    }
  }
  // Function pour ajouter commentaire par publication


}
