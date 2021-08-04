/* eslint-disable @typescript-eslint/no-inferrable-types */
import { UserService } from './../../../shared/Service/user.service';
import { Input } from '@angular/core';
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { PostService } from 'src/app/shared/Service/post.service';
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { PostKidsService } from 'src/app/shared/kids/Service/postKids.service';
import { Post } from 'src/app/shared/Model/Post';
import { User } from 'src/app/Shared/Model/user';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
 user: any;

 initialButtonIcon= "heart-outline";

 buttonColor: string;
  posts :any[] = [];
  constructor(private postKidsService: PostKidsService,private postService: PostService,private userservice: UserService) { }

  ngOnInit() {
this.getAllPostsKids();
this.getMe();
  }



  getAllPostsKids() {
    this.postKidsService.getAllPostsKids().subscribe(res => {
  this.posts=res['data'];
  console.log(res['data']);


    });
  }
  getMe() {
    this.userservice.getMe().subscribe(res => {
      this.user = res;
       console.log(this.user);

    });
  }
  async addLike(post) {

    console.log('like');
    await  this.postKidsService.likePostKids(post).subscribe(res => {
       console.log(res);
       this.getAllPostsKids();

    });

    post.icon = "heart";
    this.buttonColor = '#ff0000';

    }

    disLike(post) {
      this.postKidsService.disLikePostKids(post).subscribe(res => {
        console.log(res);
        this.getAllPostsKids();

     });

      console.log('diss');


      }

  }
getAllPost(){}
}
