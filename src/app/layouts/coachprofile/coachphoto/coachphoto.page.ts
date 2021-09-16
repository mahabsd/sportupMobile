import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, ModalController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ImageService } from '../../../Shared/Service/image.service';
import { UserService } from '../../../Shared/Service/user.service';
import { ImageProfileComponent } from '../image-profile/image-profile.component';
@Component({
  selector: 'app-coachphoto',
  templateUrl: './coachphoto.page.html',
  styleUrls: ['./coachphoto.page.scss'],
})
export class CoachphotoPage implements OnInit {
  images: any = [];
  apImg = environment.apiImg + 'image/';
  filesToUpload: any;
  user$: any;
  constructor(
    private imageService: ImageService,
    private userService: UserService,
    private modalController: ModalController,
    private action: ActionSheetController,
    private toastCtrl: ToastController
  ) {}
  ngOnInit() {
    this.getMe();
  }

  async presentModal(img: any) {
    const modal = await this.modalController.create({
      component: ImageProfileComponent,
      cssClass: 'imageModal',
      componentProps: {
        image: img,
      },
    });
    return await modal.present();
  }

  async addImage(source: CameraSource) {
    console.log('addimage');

    const fd = new FormData();
    await this.imageService.readyImage(source, fd);
    fd.append('createdBy', this.user$._id);

    this.imageService.addImage(fd).subscribe(async (res) => {
      console.log(res);
      this.presentToast('Photo ajoutée!');
      this.getImageByIdUser(this.user$.id);
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
  }

  async presentToast(message) {
    const myToast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'success',
      position: 'top'
    }).then((toastData) => {
      toastData.present();
    });
  }

  getImageByIdUser(id) {
    this.imageService.getImageByUserId(id).subscribe((res) => {
      console.log(res);
      this.images = res;
    });
  }
  getMe() {
    this.userService.getMe().subscribe(async (res) => {
      this.user$ = res.data.data;
      this.getImageByIdUser(res?.data?.data?._id);
    });
  }
}
