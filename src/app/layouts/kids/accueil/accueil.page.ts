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

  xxxMap = new Map();
  dict: any[] = [];
  idwiw;
  comwiw;
  buttonColor: string;
  posts: any[] = [];
  constructor(
    private commentService: CommentService,
    private modalController: ModalController,
    private postKidsService: PostKidsService,
    private postService: PostService,
    private userservice: UserService
  ) { }

  ngOnInit() {
    this.getAllPostsKids();
    this.getMe();
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
}
