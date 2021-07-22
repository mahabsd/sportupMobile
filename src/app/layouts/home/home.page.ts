import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from './modal-sheare/modal-sheare.page';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../shared/Service/user.service';
import { PostService } from '../../shared/Service/post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: any = [];
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
    this.getAllPosts();
  }
  getAllPosts() {
    return this.postService.getPost().subscribe(res => {

      console.log(res);
      this.posts = res;
    });


  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  loadData(event) {

    // Using settimeout to simulate api call
    setTimeout(() => {

      // load more data
      this.getAllPosts();

      //Hide Infinite List Loader on Complete
      event.target.complete();
      //Rerender Virtual Scroll List After Adding New Data
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.posts.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
