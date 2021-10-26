/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-underscore-dangle */
import { CommentsKidsPage } from './../comments-kids/comments-kids.page';
/* eslint-disable @typescript-eslint/naming-convention */
import { FormGroup } from '@angular/forms';
import { CommentsPage } from './../../home/comments/comments.page';
import { ModalController, PopoverController } from '@ionic/angular';
import { CommentService } from '../../../Shared/Service/comment.service';
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { UserService } from '../../../Shared/Service/user.service';
import { Input } from '@angular/core';
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { PostService } from 'src/app/Shared/Service/post.service';
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { PostKidsService } from 'src/app/Shared/kids/Service/postKids.service';
import { Post } from 'src/app/Shared/Model/Post';
import { User } from 'src/app/Shared/Model/User';
import { ModalShearePage } from '../../home/modal-sheare/modal-sheare.page';
import { EventService } from 'src/app/shared/Service/event.service';

import { share } from 'rxjs/operators';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  user: any;
  post: Post;
  comments: any = [];
  commentForm: FormGroup;
  comment: Comment = new Comment();
  initialButtonIcon = 'heart-outline';
  idpostcom;
  user$: any = [];
  page = 1;
  xxxMap = new Map();
  dict: any[] = [];
  buttonColor: string;
  posts: any[] = [];
  posts1: any[] = [];

  isScrollTop: boolean;
  constructor(
    private commentService: CommentService,
    private modalController: ModalController,
    private postKidsService: PostKidsService,
    private postService: PostService,
    private userservice: UserService,
    private eventService: EventService,

  ) { }

  ngOnInit() {
   // this.getAllPostsKids();
    this.getMe();
    this.getAllPostsByEvent();

  }

  getAllPostsKids() {
    this.postKidsService.getAllPostsKids().subscribe((res) => {
      this.posts = res['data'];
      console.log(res['data']);
    });
  }

  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data;
      console.log(this.user$);
    });
  }
  async like(post) {
    console.log('like');
    await this.postKidsService.likePostKids(post).subscribe((res) => {
      console.log(res);
      this.getAllPostsKids();
    });

    post.icon = 'heart';
    this.buttonColor = '#ff0000';
  }

  disLike(post) {
    console.log('diss');

    this.postKidsService.disLikePostKids(post).subscribe((res) => {
      console.log(res);
      this.getAllPostsKids();
    });
  }

  async presentModal(post) {
    const modal = await this.modalController.create({
      component: CommentsKidsPage,
      cssClass: 'my-custom-class',
      componentProps: {
        post,
        comments: this.comments,
      },
    });
    await modal.present();

    await modal.onWillDismiss().then((result) => {
      console.log(post);
      this.idpostcom = post.id;
      this.getCommentByPost();
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
      this.getAllPostsKids();

    });
  }


  getCommentByPost() {
    this.posts.forEach((element) => {
      console.log(element.id);
      this.commentService.getCommentByService(element.id).subscribe((arg) => {
        this.comments = arg;

        console.log(this.comments.length);
        this.dict.push({ post: element.id, comment: this.comments.length });
        console.log(this.dict);
      });
    });

    this.dict.forEach((r) => {
      console.log(r);
    });
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
    this.userservice.getMe().subscribe(res => {
      this.user$ = res.data.data;
      this.postService.getAllfollowingPosts(this.page, this.user$._id).pipe(share()).subscribe(res => {
        //console.log(res.data.shared);
       // console.log(res.data.data);

        
        this.posts1 =res.data.data;
        this.posts1.forEach(e => {
           if(e.type==='kids'){
            this.posts= this.posts.concat(e)
           }
         });
        //console.log(this.posts);
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
  doRefresh(event) {
    this.posts = [];
    setTimeout(() => {
      this.getAllPostsByEvent();
      event.target.complete();
    }, 1000);
  }

}
