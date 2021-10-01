import { mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/Model/User';
import { Post } from 'src/app/Shared/Model/Post';
import { PostService } from 'src/app/Shared/Service/post.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { DeletePostPopoverPage } from '../delete-post-popover/delete-post-popover.page';
import { PopoverController } from '@ionic/angular';
import { EventService } from 'src/app/shared/Service/event.service';
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
  constructor(private postService: PostService, private userService: UserService, private eventService: EventService,

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
    console.log('onDidDismiss resolved with role', role);
  }
  logScrolling(event) {
    if (event.detail.deltaY < 0) {
      this.isScrollTop = false;

    } else {
      this.isScrollTop = true;;
    }
    this.eventService.sendMessage(this.isScrollTop);
  }
}
