import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalShearePage } from './modal-sheare/modal-sheare.page';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../shared/Service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    loop: true,
    effect: 'slide',
    freeModeSticky: false,
    width: 55,
    spaceBetween: 25
  };
  constructor(private modalController: ModalController,
    private userservice: UserService) {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalShearePage
    });
    return await modal.present();
  }
  ngOnInit() {



  }

}
