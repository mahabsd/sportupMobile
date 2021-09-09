import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
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
  constructor(private userService: UserService, private action: ActionSheetController) { }

  async ngOnInit() {
    this.getMe();
  }

 
  envoyer() {
    console.log('envoyer');
  }


  getMe() {
    this.userService.getMe().subscribe(async res => {
      this.user$ = await res.data.data;
      console.log(res.data.data);

    });
  }

  async addImage(source: CameraSource) {
    console.log('addimage');
 
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source
    });
    console.log('image', image);
    const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
    const imageName = 'Give me a name';

    console.log(this.filesToUpload);
    const fd = new FormData();
    fd.append('photo', blobData, imageName);
    this.getFormData(this.user$,fd);
   
    this.userService.updateMe(fd).subscribe(async res => {
      console.log(res);

    });
  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);

      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);

    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }


  async selectImageSource() {
    const buttons = [{
      text: 'Take Photo',
      icon: 'camera',
      handler: () => {
        this.addImage(CameraSource.Camera);
      }
    }, {
      text: 'Choose from photos',
      icon: 'image',
      handler: () => {
        this.addImage(CameraSource.Photos);
      }
    },
    ];


    const actionSheet = await this.action.create({
      header: 'Select Image Source',
      buttons
    });

    await actionSheet.present();

  }
  getFormData(object, formdata: FormData) {

    Object.keys(object).forEach(key => formdata.append(key, object[key]));

}
  updateMe() {
    const fd = new FormData();
    this.getFormData(this.user$,fd);

    this.userService.updateMe(fd).subscribe(async res => {
        console.log(res);

    });

  }

}
