import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-modal-sheare',
  templateUrl: './modal-sheare.page.html',
  styleUrls: ['./modal-sheare.page.scss'],
})
export class ModalShearePage implements OnInit {
  constructor(private modalController: ModalController , private actionSheet: ActionSheetController) { }
  ngOnInit() {
    
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
  openActionSheet() {
    this.actionSheet.create({
     // header: 'Albums',
      mode: 'md',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Public',
        role: 'destructive',
        icon: 'logo-facebook',
        cssClass: 'title-img',
        handler: () => {
          console.log('Facebook share');
        }
      }, {
        text: 'Amis',
        icon: 'logo-twitter',
        cssClass: 'twitterIcon',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Amis sauf',
        icon: 'logo-whatsapp',
        cssClass: 'whatsappIcon',
        handler: () => {
          console.log('Favorite clicked');
        }
        },
        {
          text: 'Moi uniquement',
          icon: 'logo-whatsapp',
          cssClass: 'whatsappIcon',
          handler: () => {
            console.log('Favorite clicked');
          }
        }]
    }).then(res => {
      res.present();
    });
  }
  segmentChanged(data) { console.log('gggg', data); }
}
