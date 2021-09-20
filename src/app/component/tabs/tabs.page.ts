import { Component, OnInit } from '@angular/core';
import { CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { ImageService } from 'src/app/Shared/Service/image.service';
import { ModalController } from '@ionic/angular';
import { ModalShearePage } from '../../layouts/home/modal-sheare/modal-sheare.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user$: any = [];

  constructor(
    private imageService: ImageService,
    private modalController: ModalController,

  ) { }

  ngOnInit() { }
  sendMessage(message) {
    // send message to subscribers via observable subject
    this.imageService.sendMessage(message);
  }

  add(event: any) {
    console.log(event);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalShearePage,
      componentProps: {
        user: this.user$
      }
    });
    await modal.present();
    await modal.onWillDismiss().then((result) => {
    });
  }
}
