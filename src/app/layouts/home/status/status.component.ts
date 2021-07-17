import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Gesture, GestureController, IonButton, IonCard, NavController, PopoverController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { ReactionsPage } from '../reactions/reactions.page';
import { PostService } from '../../../shared/Service/post.service';
import { Post } from '../../../shared/Model/Post';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
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
    this.getAllPosts();

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
  getAllPosts() {
    this.Post$ = this.postService.getPost();

    console.log(this.Post$);

  }
  onTap() {
    console.log('ok');

    this.tap++;
  }
  like() {
    console.log('like');
    this.liked = true;
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
}
