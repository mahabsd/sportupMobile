import { Component, OnInit } from '@angular/core';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { async } from '@angular/core/testing';
import { EventService } from 'src/app/shared/Service/event.service';
import { PostService } from 'src/app/Shared/Service/post.service';

@Component({
  selector: 'app-saved-posts',
  templateUrl: './saved-posts.page.html',
  styleUrls: ['./saved-posts.page.scss'],
})
export class SavedPOSTSPage implements OnInit {
  posts: any;
  postsOwnerId: any;
  page: any = 1;
  userId: any;
  isScrollTop: boolean;
  posts$: any = [];
  user: any;
  indexPub = null;
  constructor(private savepostsService: FavorisService,
    private userService: UserService,
    private eventService: EventService,
    private postService: PostService ) { }

  ngOnInit() {
    this.getSavedPosts(event);
  }
  getSavedPosts(event) {
    this.userService.getMe().subscribe(async res => {
      this.userId = await res.data.data._id;
      this.user = await res.data.data;
      this.savepostsService.getSavedPosts(this.page,  this.userId ).subscribe(async (res: any) => {
        this.posts = await res.data.data;
       await this.posts.map(post => {
          this.posts$.push(post.post);
        });
       });

    });

  }
  loadMore(event) {
    this.page++;
    this.getSavedPosts(event);
  }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
    // Function to call like API
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
}
