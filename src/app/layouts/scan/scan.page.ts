import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { Photo, PhotoService } from 'src/app/Shared/Service/photo.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController
  ) { }

  async ngOnInit() {
    //await this.photoService.loadSaved();
  }
  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

}
