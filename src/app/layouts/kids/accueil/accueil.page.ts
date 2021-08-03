import { PostService } from 'src/app/shared/Service/post.service';
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { PostKidsService } from 'src/app/shared/kids/Service/postKids.service';
import { Post } from 'src/app/shared/Model/Post';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  posts :any[] = [];
  constructor(private postKidsService: PostKidsService,private postService: PostService) { }

  ngOnInit() {
this.getAllPostsKids();
  }

  getAllPostsKids() {
    this.postKidsService.getAllPostsKids().subscribe(res => {
  this.posts=res['data'];
  console.log(res['data']);


    });
  }

  addLike(post) {

    console.log('like');
    this.postKidsService.likePostKids(post).subscribe(res => {
       console.log(res);
    });
  }
getAllPost(){}
}
