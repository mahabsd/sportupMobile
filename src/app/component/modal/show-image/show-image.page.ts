import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.page.html',
  styleUrls: ['./show-image.page.scss'],
})
export class ShowImagePage implements OnInit {
  @ViewChild(IonSlides) slider: IonSlides;
  img: any;
  sliderOpts = {
    zoom: true
  }
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }
  ionViewDidEnter() {
    this.slider.update();
  }
  ngOnInit() {
    this.img = this.navParams.get('img');
  }
  close() {
    this.modalController.dismiss();
  }
  async zoom(zoomIn: boolean) {
    const slider = await this.slider.getSwiper();
    const zoom = slider.zoom;
    zoomIn ? zoom.in() : zoom.out();
  }
}
