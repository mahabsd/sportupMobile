/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { AddActivityPage } from './modals/add-activity/add-activity.page';
import { ModalController } from '@ionic/angular';
import { ShowActivityPage } from './modals/show-activity/show-activity.page';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.page.html',
  styleUrls: ['./activite.page.scss'],
})
export class ActivitePage implements OnInit {
  Activite = 'Activite';
  dataReturned: any;

  constructor(public modalController: ModalController
  ) { }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: AddActivityPage,
      componentProps: {
        paramID: 123,
        paramTitle: 'Test Title'
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });



    return await modal.present();
  }
  async openShowModal(activity: string) {
    const modal = await this.modalController.create({
      component: ShowActivityPage,
      componentProps: {
        paramID: activity,
        paramTitle: 'Test Title'
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });



    return await modal.present();
  }
}
