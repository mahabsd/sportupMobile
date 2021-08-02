import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/Model/Post';
import { PostService } from 'src/app/shared/Service/post.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  posts :any[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
this.getAllPostsKids();
  }

  getAllPostsKids() {
    this.postService.getAllPostsKids().subscribe(res => {
  this.posts=res['data'];
  console.log(res['data']);


    });
  }

}
