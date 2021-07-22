import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll, NavController, PopoverController } from '@ionic/angular';
import { ReactionsPage } from '../reactions/reactions.page';
import { PostService } from '../../../shared/Service/post.service';
import { Post } from '../../../shared/Model/Post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  @Input()
  post: Post;
  longPressActive = false;
  posts: any = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Post$: Observable<Post[]>;

  tap = 0;
  press = 0;
  liked = false;
  bookmarked = false;

  constructor(private navCtrl: NavController,
    private postService: PostService,
    private popoverCtrl: PopoverController) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
  ngOnInit() {
    // this.getAllPosts();

  }

  async showReactions(ev) {
    this.press++;
    const reactions = await this.popoverCtrl.create(
      {
        component: ReactionsPage,
        event: ev
      }
    );

    await reactions.present();
    const { role } = await reactions.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  // getAllPosts() {
  //   return this.postService.getPost().subscribe(res => {

  //     console.log(res);
  //     this.posts = res;
  //   });


  // }
  onTap() {
    console.log('ok');

    this.tap++;
  }
  like(post) {
    console.log('like');
    this.liked = true;
    this.postService.likePost(post).subscribe(res => {
      console.log(res);

    });
  }
  dislike() {
    console.log('dislike');
    this.liked = false;
  }
  comment() {
    console.log('comment');
  }
  share() {
    console.log('share');
  }
  bookmark() {
    console.log('bookmark');
    this.bookmarked = true;
  }
  unbookmark() {
    console.log('unbookmark');
    this.bookmarked = false;
  }




  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
