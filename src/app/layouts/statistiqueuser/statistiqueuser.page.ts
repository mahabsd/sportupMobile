import { Component, OnInit ,ChangeDetectorRef, ViewChild  } from '@angular/core';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { ModalController, IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-statistiqueuser',
  templateUrl: './statistiqueuser.page.html',
  styleUrls: ['./statistiqueuser.page.scss'],
})
export class StatistiqueuserPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };

  modalCtrl: any;
  constructor(private modalController: ModalController, private changeDetectorRef: ChangeDetectorRef) { }
  async openPreview(img) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'transparent-modal',
      componentProps: {
        img
      }
    });
    modal.present();
  }

  ngOnInit() {
  }

  next(){
    this.slides.slideNext();
  }

  prev(){
    this.slides.slidePrev();
  }
}
// 30-2350
// or
// 50 / 1200
