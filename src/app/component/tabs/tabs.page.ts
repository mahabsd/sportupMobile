import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalShearePage } from 'src/app/layouts/home/modal-sheare/modal-sheare.page';
import { UserService } from 'src/app/Shared/Service/user.service';
import { CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { ImageService } from 'src/app/Shared/Service/image.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user$: any = [];

  constructor(     private imageService: ImageService,private modalController: ModalController, private userservice: UserService) { }

  ngOnInit() {
    this.getMe()
  }

  getMe() {
    this.userservice.getMe().subscribe((res) => {
      this.user$ = res.data.data;
      console.log(this.user$);
    });
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


sendMessage(message) {
  // send message to subscribers via observable subject
  this.imageService.sendMessage(message);
}



add(event: any) {
  console.log(event);
}
}
