import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { User } from '../../../shared/Model/User';
import { AuthService } from '../../../shared/Auth/auth.service';
import { PostService } from '../../../shared/Service/post.service';
import { Post } from '../../../shared/Model/Post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal-sheare',
  templateUrl: './modal-sheare.page.html',
  styleUrls: ['./modal-sheare.page.scss'],
})
export class ModalShearePage implements OnInit {
  @Input() user: User;
  // user: User = new User();
  post: Post = new Post();
  postForm: FormGroup;
  constructor(private modalController: ModalController,
    private actionSheet: ActionSheetController,
    private authService: AuthService,
    private postService: PostService
  ) { }
  ngOnInit() {
    this.postForm = new FormGroup({
      contentControl: new FormControl('', Validators.required)
    });
    this.getUser();
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  openActionSheet() {
    this.actionSheet.create({
      header: 'Qui peut voir votre publication?',
      animated:true,
      mode: 'md',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Public',
        role: 'destructive',
        icon: 'world',
        cssClass: 'title-img',
        handler: () => {
          console.log('Facebook share');
        }
      }, {
        text: 'Amis',
        icon: 'people',
        cssClass: 'twitterIcon',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Amis sauf',
        icon: 'person',
        cssClass: 'whatsappIcon',
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'Moi uniquement',
        icon: 'bag',
        cssClass: 'whatsappIcon',
        handler: () => {
          console.log('Favorite clicked');
        }
      }]
    }).then(res => {
      res.present();
    });
  }
  segmentChanged(data) { console.log('gggg', data); }
  getUser() {
    this.authService.getUser().subscribe(res => {
      this.user = res;
      return this.user;

    });
  }
  createPost() {
    this.postService.createPost(this.post).subscribe(res => {
      this.closeModal();
      return res;
    });
  }

}
