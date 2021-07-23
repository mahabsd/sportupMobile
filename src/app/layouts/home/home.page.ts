import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from './modal-sheare/modal-sheare.page';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../shared/Service/user.service';
import { PostService } from '../../shared/Service/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../shared/Model/Post';
import { User } from 'src/app/Shared/Model/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts$: any = [];
  user$: Observable<User>;
  slideOpts = {
    loop: true,
    effect: 'slide',
    freeModeSticky: false,
    width: 55,
    spaceBetween: 25
  };
  constructor(
    private modalController: ModalController,
    private postService: PostService,
    private userservice: UserService) {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalShearePage
    });
    this.getAllPosts();
    return await modal.present();
  }
  ngOnInit() {
    this.user$ = this.userservice.getMe();
    console.log(this.user$);

    this.getAllPosts();
  }

  getAllPosts(): Observable<Post[]> {
    return this.posts$ = this.postService.getAllPosts();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  like(post) {
    console.log('like');
    this.postService.likePost(post).subscribe(res => {
      console.log(res);
    });
  }
  disLike(post) {
    console.log('dislike');
    this.postService.disLikePost(post).subscribe(res => {
      console.log(res);
      this.getAllPosts();

    });
    ;
  }
}
