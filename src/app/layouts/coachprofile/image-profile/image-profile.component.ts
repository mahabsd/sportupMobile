import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CameraSource } from '@capacitor/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ZipSubscriber } from 'rxjs/internal/observable/zip';
import { EventService } from 'src/app/shared/Service/event.service';
import { environment } from 'src/environments/environment';
import { ImageService } from '../../../shared/Service/image.service';
@Component({
  selector: 'app-image-profile',
  templateUrl: './image-profile.component.html',
  styleUrls: ['./image-profile.component.scss'],
})
export class ImageProfileComponent implements OnInit {
  @Input() image: any;
  @Input() video: any;
  isImages: false;
  apImg = environment.apiImg + 'image/';
  apiPost = environment.apiImg + 'Post/';
  constructor(
    private modalController: ModalController,
    private imageService: ImageService,
    private action: ActionSheetController,
  ) { }

  ngOnInit() {
  }

  getExt(fileName) {
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
    return ext;
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  async addImage(source: CameraSource) {
    const fd = new FormData();
    await this.imageService.readyImage(source, fd);
    fd.append('createdBy', this.image.createdBy);
    this.imageService.addImage(fd).subscribe(async (res) => {
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
  supprimer(image) {
    this.imageService.deleteimage(image.id).subscribe((res) => {
      this.dismiss();
    });
  }
  modifier(image) {
    this.imageService.updateImage(image).subscribe((res) => {
      this.dismiss();
    });
  }



}
