import { mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Model/User';
import { Post } from 'src/app/Shared/Model/Post';
import { PostService } from 'src/app/Shared/Service/post.service';
import { UserService } from 'src/app/Shared/Service/user.service';
@Component({
  selector: 'app-coachpub',
  templateUrl: './coachpub.page.html',
  styleUrls: ['./coachpub.page.scss'],
})
export class CoachpubPage implements OnInit {
  // eslint-disable-next-line max-len
  user$: any = [];
  posts: any = [];
  page = 1;
  constructor(private postService: PostService, private userService: UserService) { }

  async ngOnInit() {
    await this.getMe();

  }

  getMe() {
    this.userService.getMe().subscribe(async res => {
      this.user$ = await res.data.data;
      await this.getPosts();
    });
  }
  getPosts(event?) {
    console.log(this.page);

    this.postService.getAllPostsById(this.page, this.user$._id).subscribe((response) => {
      this.posts = this.posts.concat(response['data']);
      if (event) {
        event.target.complete();
      }
    }, error => {
      console.error(error);
    });
  }
  loadMore(event) {
    this.page++;
    this.getPosts(event);
  }
}
