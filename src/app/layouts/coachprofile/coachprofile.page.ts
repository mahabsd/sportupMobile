import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShowImagePage } from 'src/app/component/modal/show-image/show-image.page';


@Component({
  selector: 'app-coachprofile',
  templateUrl: './coachprofile.page.html',
  styleUrls: ['./coachprofile.page.scss'],
})
export class CoachprofilePage implements OnInit {
  sliderOpts = {
    zoom: false,
    slidesPreview: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  }
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async openPreview(img) {
    const modal = await this.modalController.create({
      component: ShowImagePage,
      componentProps: { img }
    });

    await modal.present();


  }
}
