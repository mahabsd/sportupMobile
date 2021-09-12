import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { ImageService } from 'src/app/Shared/Service/image.service';
import { UserService } from 'src/app/Shared/Service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.page.html',
  styleUrls: ['./updateprofil.page.scss'],
})
export class UpdateprofilPage implements OnInit {
  user$: any = [];
  apiImg = environment.apiImg + 'User/';
  filesToUpload = null;
  constructor(
    private userService: UserService,
    private action: ActionSheetController,
    private imageService: ImageService
  ) {}
  async ngOnInit() {
    this.getMe();
  }

  envoyer() {
    console.log('envoyer');
  }

  getMe() {
    this.userService.getMe().subscribe(async (res) => {
      this.user$ = await res.data.data;
      console.log(res.data.data);
    });
  }


  async addImage(source: CameraSource) {
    console.log('addimmage');

    const fd = new FormData();
    await this.imageService.readyImage(source, fd);
    this.getFormData(this.user$, fd);

    this.userService.updateMe(fd).subscribe(async (res) => {
      console.log(res);
      this.getMe();
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
  getFormData(object, formdata: FormData) {
    Object.keys(object).forEach((key) => formdata.append(key, object[key]));
  }
  updateMe() {
    const fd = new FormData();
    this.getFormData(this.user$, fd);

    this.userService.updateMe(fd).subscribe(async (res) => {
      console.log(res);
    });
  }
}
