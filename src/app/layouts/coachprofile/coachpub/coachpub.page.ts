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
  coachInfo = { name: 'Nom', lastname: 'Prenom', backgroundImage: 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg', profileImage: 'https://www.computerhope.com/jargon/g/guest-user.jpg' };
  user$: any = [];
  posts: any = [];
  page = 1;
  constructor(private postService: PostService, private userService: UserService) { }

  async ngOnInit() {
    this.getMe();

  }

  loadMore() {

  }




  getMe() {
    this.userService.getMe().subscribe(res => {
      this.user$ = res.data.data;
      this.getPosts(this.user$._id);
    });
  }
  getPosts(id) {
    this.postService.getAllPostsById(this.page, id).subscribe((response) => {
      this.posts = this.posts.concat(response['data']);
    }, error => {
      console.error(error);
    }

    );

  }
  // get post by mergeMap
  // posts
}
