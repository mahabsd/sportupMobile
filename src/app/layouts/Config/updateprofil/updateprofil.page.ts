import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/Shared/Auth/auth.service';
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
  disabledName = false;
  dateOfToday = new Date();
  constructor(
    private userService: UserService,
    private action: ActionSheetController,
    private imageService: ImageService,
    private authService: AuthService
  ) { }
  async ngOnInit() {
    this.getMe();
  }

  envoyer() {
    console.log('envoyer');
  }

  getMe() {
    this.userService.getMe().subscribe(async (res) => {
      this.user$ = await res.data.data;

      this.userService.getUser(this.user$._id).subscribe(user => {
        const createdAt = new Date(this.user$.createdAt);
        if (createdAt.getFullYear() === this.dateOfToday.getFullYear()) {
          if (this.dateOfToday.getDay() - createdAt.getDate() < 61) {
            this.disabledName = true;
          }
        }
      });
    });
  }


  async addImage(source: CameraSource) {

    const fd = new FormData();
    await this.imageService.readyImage(source, fd);
    this.getFormData(this.user$, fd);

    this.userService.updateMe(fd).subscribe(async (res) => {
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

    this.userService.updateMe(fd).subscribe();
  }
}
