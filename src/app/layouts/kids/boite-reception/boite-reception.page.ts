/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatKidsPage } from '../chat-kids/chat-kids.page';

@Component({
  selector: 'app-boite-reception',
  templateUrl: './boite-reception.page.html',
  styleUrls: ['./boite-reception.page.scss'],
})
export class BoiteReceptionPage implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }
  async click() {
    const modal = await this.modalController.create({
      component: ChatKidsPage,
      cssClass: 'my-custom-class',
      componentProps: {

      }
    });
    await modal.present();

    await modal.onWillDismiss().then((result) => {
     console.log("closed");


    });


  }
}
