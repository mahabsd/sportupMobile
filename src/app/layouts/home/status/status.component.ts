import { EventEmitter, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll, NavController, PopoverController } from '@ionic/angular';
import { ReactionsPage } from '../reactions/reactions.page';
import { PostService } from '../../../shared/Service/post.service';
import { Post } from '../../../shared/Model/Post';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/Model/user';
import { UserService } from '../../../shared/Service/user.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  @Input() post: Post;

  @Output() likeFn = new EventEmitter();
  @Output() disLikeFn = new EventEmitter();
  longPressActive = false;
  posts: any = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Post$: Observable<Post[]>;
  user: User = new User();
  tap = 0;
  press = 0;
  liked = false;
  bookmarked = false;
  id: number;
  constructor(private navCtrl: NavController,
    private postService: PostService,
    private userService: UserService,
    private popoverCtrl: PopoverController) {
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }
  ngOnInit() {

    this.getMe();


  }
  getMe() {
    this.userService.getMe().subscribe(res => {
      // eslint-disable-next-line no-underscore-dangle
      this.id = res._id;
      // eslint-disable-next-line no-underscore-dangle
      console.log(this.user._id);
    });
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

  onTap() {
    console.log('ok');

    this.tap++;
  }

  like(post) {
    this.likeFn.emit(post);
  }
  disLike(post) {
    this.disLikeFn.emit(post);
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
  unBookmark() {
    console.log('unbookmark');
    this.bookmarked = false;
  }




  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
