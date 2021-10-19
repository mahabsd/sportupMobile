import { mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Model/User';
import { Post } from 'src/app/Shared/Model/Post';
import { PostService } from 'src/app/Shared/Service/post.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { DeletePostPopoverPage } from '../delete-post-popover/delete-post-popover.page';
import { PopoverController } from '@ionic/angular';
import { EventService } from 'src/app/shared/Service/event.service';
import { Router } from '@angular/router';
import { FavorisService } from 'src/app/Shared/Service/favoris.service';
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
  selectedDate;
  isScrollTop: boolean;
  postsOwnerId: any;
  posts$: any;
  constructor(private postService: PostService,
    private userService: UserService,
    private eventService: EventService,
    private savepostsService: FavorisService,
    public popoverController: PopoverController,
  ) { }

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
    this.postsOwnerId = this.postService.postsOwnerId;
    this.postService.getAllPostsById(this.page, this.postsOwnerId).subscribe((response) => {
      this.posts = this.posts.concat(response['data']);
      this.savepostsService.getSavedPosts(this.page,  this.postsOwnerId ).subscribe((res: any) => {
        this.posts$ = res.data.data;
        this.posts$.map(post=> {
          this.posts.push(post.post);
        });
       });
       this.savepostsService.getAllSharedPosts(this.page,  this.postsOwnerId ).subscribe((res: any) => {
        this.posts$ = res.data.data;
        console.log(res.data.data);

        this.posts$.map(post=> {
          this.posts.push(post.post);
       });
       console.log(this.posts);

      });
    // this.getAllsharedPosts();
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
  async openPostMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: DeletePostPopoverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      mode: 'ios',
      componentProps: {
        paramID: ev,
      }
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
  }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
getAllsharedPosts() {
  this.savepostsService.getAllSharedPosts(this.page,  this.postsOwnerId ).subscribe((res: any) => {
    this.posts$ = res.data.data;
    console.log(res.data.data);

    this.posts$.map(post=> {
      this.posts.push(post.post);
   });
   console.log(this.posts);

  });
 }

}
