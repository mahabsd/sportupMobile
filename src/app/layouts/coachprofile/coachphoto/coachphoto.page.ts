import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import {
  ActionSheetController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { forkJoin, Subscription } from 'rxjs';
import { EventService } from 'src/app/shared/Service/event.service';
import { PostService } from 'src/app/Shared/Service/post.service';
import { environment } from 'src/environments/environment';
import { ImageService } from '../../../Shared/Service/image.service';
import { UserService } from '../../../Shared/Service/user.service';
import { ImageProfileComponent } from '../image-profile/image-profile.component';
import { share } from 'rxjs/operators';
@Component({
  selector: 'app-coachphoto',
  templateUrl: './coachphoto.page.html',
  styleUrls: ['./coachphoto.page.scss'],
})
export class CoachphotoPage implements OnInit {
  images: any = [];
  posts: any = [];
  apImg = environment.apiImg + 'Post/';
  subscription: Subscription;
  filesToUpload: any;
  user$: any;
  messages: any[] = [];
  isScrollTop: boolean;
  userId: any;
  page = 1;
  postsOwnerId: any;
  mediafiles;
  constructor(
    private imageService: ImageService,
    private userService: UserService,
    private modalController: ModalController,
    private action: ActionSheetController,
    private toastCtrl: ToastController,
    private eventService: EventService,
    private router: Router,
    private postService: PostService,
  ) {
    this.subscription = this.imageService.getMessage().subscribe((message) => {
      if (message.event === 'addphoto') {
        //  this.selectImageSource();
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }
  ngOnInit() {
    this.postsOwnerId = this.postService.postsOwnerId;
    this.getAllPosts();
  }

  async presentModal(img: any) {
    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        image: img,
        isImages: true
      },
    });
    return await modal.present();
  }

  /* async addImage(source: CameraSource) {

     const fd = new FormData();
     await this.imageService.readyImage(source, fd);
     fd.append('createdBy', this.user$._id);

     this.imageService.addImage(fd).subscribe(async (res) => {
       // console.log(res);
       this.presentToast('Photo ajout??e!');
     });
   }

   async selectImageSource() {
     const buttons = [
       {
         text: 'Take Photo',
         icon: 'camera',
         handler: () => {
           this.addImage(CameraSource.Camera);
         },
       },
       {
         text: 'Choose from photos',
         icon: 'image',
         handler: () => {
           this.addImage(CameraSource.Photos);
         },
       },
     ];

     const actionSheet = await this.action.create({
       header: 'Select Image Source',
       buttons,
     });

     await actionSheet.present();
   }*/

  async presentToast(message) {
    const myToast = await this.toastCtrl
      .create({
        message,
        duration: 2000,
        color: 'success',
        position: 'top',
      })
      .then((toastData) => {
        toastData.present();
      });
  }
  getMe() {
    this.userService.getMe().subscribe(async (res) => {
      this.user$ = res.data.data;
    });
  }

  getpostFiles(post) {
    forkJoin({
      mediafiles: this.postService.getPost(post._id),
    }).subscribe(({ mediafiles }) => {
      this.mediafiles = mediafiles.mediafiles;
      this.mediafiles.forEach(element => {
        this.images.push(element);
      });
    });
  }

  getAllPosts(event?) {
    this.userService.getMe().subscribe(res => {
      this.user$ = res.data.data;
      this.postService.getAllPostsById(this.page, this.postsOwnerId).pipe(share()).subscribe(res => {
        this.posts = res.data.data;
        this.posts.forEach(post => {
          this.getpostFiles(post);
        });
        if (event) {
          event.target.complete();
        }
      });
    });

  }

  getExt(fileName) {
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    return ext;
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
